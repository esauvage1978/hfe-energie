<?php
declare(strict_types=1);

/**
 * Synchronise les avis Google (noms complets) et sert public/data/google-reviews.json.
 * GET — retourne le JSON (rafraîchit si cache > 7 jours et clé API présente).
 *
 * Clé : variable d’environnement GOOGLE_PLACES_API_KEY ou fichier .env à la racine du projet.
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=3600');

const GOOGLE_MAPS_URL = 'https://www.google.com/maps?q=HFE+Pompe+%C3%A0+Chaleur+-+Climatisation,+71+Rue+du+G%C3%A9n%C3%A9ral+de+Gaulle,+59110+La+Madeleine&ftid=0x90e0797ea958d91:0x5f31aec968c997a5';
const TEXT_QUERY = 'Hecker & Frères Énergie (HFE) 44 Rue Jean sans peur 59800 Lille';
const CACHE_MAX_AGE = 7 * 24 * 3600;

$root = dirname(__DIR__, 2);
$cacheFile = dirname(__DIR__) . '/data/google-reviews.json';

loadEnvFile($root . '/.env');

$apiKey = getenv('GOOGLE_PLACES_API_KEY') ?: '';
$placeIdPreset = getenv('GOOGLE_PLACE_ID') ?: '';
$textQuery = getenv('GOOGLE_PLACE_TEXT_QUERY') ?: TEXT_QUERY;

$needsSync = !is_file($cacheFile)
    || (time() - (int) filemtime($cacheFile)) > CACHE_MAX_AGE;

if ($needsSync && $apiKey !== '') {
    try {
        syncGoogleReviews($apiKey, $textQuery, $placeIdPreset, $cacheFile);
    } catch (Throwable $e) {
        if (!is_file($cacheFile)) {
            http_response_code(503);
            echo json_encode([
                'ok' => false,
                'message' => 'Synchronisation impossible : ' . $e->getMessage(),
            ], JSON_UNESCAPED_UNICODE);
            exit;
        }
    }
}

if (!is_file($cacheFile)) {
    http_response_code(404);
    echo json_encode([
        'ok' => false,
        'message' => 'Aucun cache d’avis. Configurez GOOGLE_PLACES_API_KEY ou lancez npm run fetch-google-reviews.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

readfile($cacheFile);

function loadEnvFile(string $path): void
{
    if (!is_readable($path)) {
        return;
    }
    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
            continue;
        }
        [$key, $value] = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value, " \t\"'");
        if ($key !== '' && getenv($key) === false) {
            putenv("$key=$value");
            $_ENV[$key] = $value;
        }
    }
}

function syncGoogleReviews(string $apiKey, string $textQuery, string $placeIdPreset, string $cacheFile): void
{
    $placeId = $placeIdPreset !== ''
        ? $placeIdPreset
        : findPlaceId($apiKey, $textQuery);

    $place = fetchPlaceDetails($apiKey, $placeId);
    $reviews = mapReviews($place);

    if ($reviews === []) {
        throw new RuntimeException('Aucun avis retourné par Google.');
    }

    $previous = [];
    if (is_file($cacheFile)) {
        $decoded = json_decode((string) file_get_contents($cacheFile), true);
        if (is_array($decoded)) {
            $previous = $decoded;
        }
    }

    $payload = [
        'fetchedAt' => gmdate('c'),
        'source' => 'api',
        'placeId' => $placeId,
        'rating' => (float) ($place['rating'] ?? $previous['rating'] ?? 4.9),
        'userRatingCount' => (int) ($place['userRatingCount'] ?? $previous['userRatingCount'] ?? 0),
        'googleMapsUri' => GOOGLE_MAPS_URL,
        'reviewUrl' => GOOGLE_MAPS_URL,
        'reviews' => $reviews,
    ];

    $dir = dirname($cacheFile);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $json = json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "\n";
    file_put_contents($cacheFile, $json);

    $srcCopy = dirname(__DIR__, 2) . '/src/data/google-reviews.json';
    if (is_writable(dirname($srcCopy))) {
        file_put_contents($srcCopy, $json);
    }
}

function googleRequest(string $method, string $url, string $apiKey, ?array $body = null, ?string $fieldMask = null): array
{
    $headers = ['X-Goog-Api-Key: ' . $apiKey];
    if ($fieldMask !== null) {
        $headers[] = 'X-Goog-FieldMask: ' . $fieldMask;
    }
    if ($body !== null) {
        $headers[] = 'Content-Type: application/json';
    }

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_POSTFIELDS => $body !== null ? json_encode($body) : null,
        CURLOPT_TIMEOUT => 30,
    ]);

    $response = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($response === false || $status < 200 || $status >= 300) {
        throw new RuntimeException("Requête Google échouée ($status)");
    }

    $data = json_decode($response, true);
    if (!is_array($data)) {
        throw new RuntimeException('Réponse Google invalide.');
    }

    return $data;
}

function findPlaceId(string $apiKey, string $textQuery): string
{
    $data = googleRequest(
        'POST',
        'https://places.googleapis.com/v1/places:searchText',
        $apiKey,
        [
            'textQuery' => $textQuery,
            'languageCode' => 'fr',
            'regionCode' => 'FR',
            'maxResultCount' => 1,
        ],
        'places.id,places.displayName',
    );

    $id = $data['places'][0]['id'] ?? '';
    if ($id === '') {
        throw new RuntimeException("Établissement introuvable : $textQuery");
    }

    return $id;
}

function fetchPlaceDetails(string $apiKey, string $placeId): array
{
    $mask = implode(',', [
        'id',
        'rating',
        'userRatingCount',
        'googleMapsUri',
        'reviews.authorAttribution',
        'reviews.rating',
        'reviews.text',
        'reviews.originalText',
        'reviews.publishTime',
        'reviews.relativePublishTimeDescription',
    ]);

    return googleRequest(
        'GET',
        'https://places.googleapis.com/v1/places/' . rawurlencode($placeId),
        $apiKey,
        null,
        $mask,
    );
}

function authorDisplayName(?array $attribution): ?string
{
    $name = trim((string) ($attribution['displayName'] ?? ''));
    return $name !== '' ? $name : null;
}

function mapReviews(array $place): array
{
    $out = [];
    foreach ($place['reviews'] ?? [] as $r) {
        $author = authorDisplayName($r['authorAttribution'] ?? null);
        $text = trim((string) ($r['text']['text'] ?? $r['originalText']['text'] ?? ''));
        if ($author === null || $text === '') {
            continue;
        }

        $out[] = [
            'author' => $author,
            'rating' => min(5, max(0, (int) round((float) ($r['rating'] ?? 0)))),
            'text' => $text,
            'relativeTime' => (string) ($r['relativePublishTimeDescription'] ?? ''),
            'publishTime' => (string) ($r['publishTime'] ?? gmdate('c')),
            'authorUri' => $r['authorAttribution']['uri'] ?? null,
            'photoUri' => $r['authorAttribution']['photoUri'] ?? null,
        ];
    }

    usort($out, static fn ($a, $b) => strcmp($b['publishTime'], $a['publishTime']));

    return array_slice($out, 0, 5);
}
