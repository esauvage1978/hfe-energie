import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

export interface ServiceAreaMapProps {
  lat: number;
  lng: number;
  radiusKm: number;
  label: string;
  ariaLabel: string;
}

export default function ServiceAreaMap({
  lat,
  lng,
  radiusKm,
  label,
  ariaLabel,
}: ServiceAreaMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const L = await import("leaflet");
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
      }).setView([lat, lng], 9);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const circle = L.circle([lat, lng], {
        radius: radiusKm * 1000,
        color: "#0080c0",
        weight: 2,
        fillColor: "#0080c0",
        fillOpacity: 0.12,
      }).addTo(map);

      const markerIcon = L.divIcon({
        className: "",
        html: '<div style="width:14px;height:14px;border-radius:9999px;background:#0080c0;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35)"></div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });

      L.marker([lat, lng], { icon: markerIcon, title: label }).addTo(map);
      map.fitBounds(circle.getBounds(), { padding: [24, 24] });

      mapRef.current = map;
    }

    void init();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [lat, lng, radiusKm, label]);

  return (
    <div
      ref={containerRef}
      className="h-[min(420px,70vh)] w-full rounded-2xl border border-neutral-200 shadow-sm z-0"
      role="img"
      aria-label={ariaLabel}
    />
  );
}
