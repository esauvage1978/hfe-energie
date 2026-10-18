<?php
declare(strict_types=1);

/**
 * Proxy formulaire contact → Webhooky (évite CORS côté navigateur).
 * POST JSON — voir emails/contact-zapier-payload-keys.json
 */

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Utilisez POST pour envoyer les données du formulaire.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Corps JSON invalide.']);
    exit;
}

/* --- Anti-robot (sans captcha, même logique que emmanuelsauvage.fr) ---
 * Honeypot, délai minimal de remplissage, POST direct sans horodatage,
 * charabia, partie locale d'e-mail truffée de points, origine étrangère.
 * Réponse = faux succès : le robot ne sait pas qu'il est filtré.
 * Chaque rejet est tracé dans le journal d'erreurs PHP (logs OVH) pour
 * repérer d'éventuels faux positifs.
 */
function hfe_spam_reject(string $why): void
{
    error_log('[contact-antispam] ' . $why . ' ip=' . ($_SERVER['REMOTE_ADDR'] ?? '?'));
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

function hfe_looks_gibberish(string $s): bool
{
    $s = trim($s);
    if ($s === '' || preg_match('/\s/u', $s)) {
        return false; // un texte humain contient des espaces
    }
    if (mb_strlen($s) < 12 || !preg_match('/^[A-Za-z]+$/', $s)) {
        return false;
    }
    $caseChanges = preg_match_all('/[a-z][A-Z]|[A-Z][a-z]/', $s);
    return $caseChanges >= (int) (mb_strlen($s) / 4); // ex. rPEZEZMpmNDnWYMRUOjUv
}

// Origine : un navigateur envoie Origin sur un fetch POST ; on refuse un autre site.
$origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
if ($origin !== '' && !preg_match('#^https?://(www\.)?hfe-energie\.fr(:\d+)?$#i', $origin)
    && !preg_match('#^https?://(localhost|127\.0\.0\.1)(:\d+)?$#', $origin)) {
    hfe_spam_reject('foreign origin: ' . $origin);
}

// Honeypot
if (!empty($data['website'])) {
    hfe_spam_reject('honeypot');
}

// Délai : form_ts posé à l'affichage du formulaire, fill_ms = durée de saisie
$formTs = (int) ($data['form_ts'] ?? 0);
$fillMs = (int) ($data['fill_ms'] ?? 0);
if ($formTs <= 0) {
    hfe_spam_reject('no form_ts (POST direct)');
}
if ($fillMs < 3000) {
    hfe_spam_reject('too fast: ' . $fillMs . 'ms');
}

$clientTypeLabels = [
    'particulier' => 'Particulier',
    'professionnel' => 'Professionnel',
];

$serviceLabels = [
    'pompe-a-chaleur' => 'Pompe à chaleur',
    'climatisation' => 'Climatisation réversible',
    'chauffage' => 'Chauffage / chaudière',
    'chauffe-eau' => 'Chauffe-eau thermodynamique',
    'plomberie' => 'Plomberie / sanitaire',
    'depannage' => 'Dépannage urgent',
    'recrutement' => 'Recrutement',
    'autre' => 'Autre projet',
];

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$postal = trim((string) ($data['postal'] ?? ''));
$siren = preg_replace('/\D/', '', trim((string) ($data['siren'] ?? ''))) ?? '';
$clientType = trim((string) ($data['client_type'] ?? ''));
$service = trim((string) ($data['service'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if (strlen($name) < 2) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Nom invalide.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'E-mail invalide.']);
    exit;
}

if ($phone !== '' && !preg_match('/^[0-9\s+().-]{8,}$/', $phone)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Téléphone invalide.']);
    exit;
}

if ($clientType === '' || !isset($clientTypeLabels[$clientType])) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Profil client invalide.']);
    exit;
}

if ($clientType === 'professionnel' && !preg_match('/^\d{9}$/', $siren)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'SIREN invalide.']);
    exit;
}

if ($service === '' || !isset($serviceLabels[$service])) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Type de projet invalide.']);
    exit;
}

if (strlen($message) < 10) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Message trop court.']);
    exit;
}

if (hfe_looks_gibberish($name) || hfe_looks_gibberish($message)) {
    hfe_spam_reject('gibberish name/message');
}
if (preg_match('/^(.+?)@/', $email, $em) && substr_count($em[1], '.') >= 3) {
    hfe_spam_reject('dotted email local part');
}

function normalizePhoneRaw(string $phone): string
{
    $digits = preg_replace('/\D/', '', $phone) ?? '';
    if ($digits === '') {
        return '';
    }
    if (str_starts_with($digits, '33') && strlen($digits) >= 11) {
        return '+' . $digits;
    }
    if (str_starts_with($digits, '0') && strlen($digits) === 10) {
        return '+33' . substr($digits, 1);
    }
    return str_starts_with($phone, '+') ? preg_replace('/\s/', '', $phone) : '+' . $digits;
}

$now = (new DateTimeImmutable('now', new DateTimeZone('UTC')))->format('c');

$payload = [
    'client_type' => $clientType,
    'client_type_label' => $clientTypeLabels[$clientType],
    'name' => $name,
    'email' => $email,
    'phone' => $phone !== '' ? $phone : '—',
    'phone_raw' => normalizePhoneRaw($phone),
    'postal' => $postal !== '' ? $postal : '—',
    'siren' => $clientType === 'professionnel' ? $siren : '—',
    'service' => $service,
    'service_label' => $serviceLabels[$service],
    'message' => $message,
    'source' => 'hfe-energie.fr',
    'page' => trim((string) ($data['page'] ?? '/contact')) ?: '/contact',
    'privacy_policy_accepted' => 'true',
    'privacy_policy_accepted_at' => $now,
    'submitted_at' => $now,
];

$webhookUrl = getenv('CONTACT_WEBHOOK_URL') ?: 'https://webhooky.builders/webhook/form/a03063bda3024ab41fc1-83ec-4dd9-9066-3d25f81d0c4e';
$jsonPayload = json_encode($payload, JSON_UNESCAPED_UNICODE);

$ch = curl_init($webhookUrl);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $jsonPayload,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Accept: application/json'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
]);

$responseBody = curl_exec($ch);
$httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($responseBody === false || $httpCode < 200 || $httpCode >= 300) {
    http_response_code(502);
    echo json_encode([
        'ok' => false,
        'message' => 'Impossible de transmettre la demande. Merci de réessayer ou de nous appeler.',
        'detail' => $curlError !== '' ? $curlError : null,
    ]);
    exit;
}

http_response_code(200);
echo $responseBody !== '' ? $responseBody : json_encode(['ok' => true]);
