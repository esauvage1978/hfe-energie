import { useMemo, useState } from "react";
import type { ServiceAreaDepartment } from "@data/service-area";

export interface ServiceAreaCommuneListProps {
  departments: ServiceAreaDepartment[];
  locale: "fr" | "en";
  searchPlaceholder: string;
  noResults: string;
}

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export default function ServiceAreaCommuneList({
  departments,
  locale,
  searchPlaceholder,
  noResults,
}: ServiceAreaCommuneListProps) {
  const [query, setQuery] = useState("");

  function communeCountLabel(visible: number, total: number): string {
    if (locale === "en") {
      return visible === total
        ? `${total} towns listed within a 50 km radius`
        : `${visible} of ${total} towns found`;
    }
    return visible === total
      ? `${total} communes listées dans un rayon de 50 km`
      : `${visible} commune${visible > 1 ? "s" : ""} trouvée${visible > 1 ? "s" : ""} sur ${total}`;
  }

  function distanceLabel(km: number): string {
    return locale === "en"
      ? `${km.toLocaleString("en-GB")} km from HQ`
      : `${km.toLocaleString("fr-FR")} km du siège`;
  }

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return departments;

    return departments
      .map((dept) => ({
        ...dept,
        communes: dept.communes.filter((c) => {
          const haystack = normalize(
            [c.name, ...c.postalCodes, c.department].join(" "),
          );
          return haystack.includes(q);
        }),
      }))
      .filter((dept) => dept.communes.length > 0);
  }, [departments, query]);

  const visibleCount = filtered.reduce(
    (sum, dept) => sum + dept.communes.length,
    0,
  );
  const totalCount = departments.reduce(
    (sum, dept) => sum + dept.communes.length,
    0,
  );

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-600">
          {communeCountLabel(visibleCount, totalCount)}
        </p>
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">{searchPlaceholder}</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 shadow-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-neutral-600">{noResults}</p>
      ) : (
        <div className="mt-8 space-y-8">
          {filtered.map((dept) => (
            <section key={dept.code} aria-labelledby={`dept-${dept.code}`}>
              <h3
                id={`dept-${dept.code}`}
                className="font-display text-lg font-bold text-neutral-900"
              >
                {dept.name}{" "}
                <span className="text-sm font-medium text-neutral-500">
                  ({dept.communes.length})
                </span>
              </h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {dept.communes.map((commune) => (
                  <li
                    key={commune.code}
                    className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm"
                  >
                    <span className="font-medium text-neutral-800">
                      {commune.name}
                    </span>
                    {commune.postalCodes[0] && (
                      <span className="ml-1 text-neutral-500">
                        ({commune.postalCodes[0]})
                      </span>
                    )}
                    <span className="block text-xs text-neutral-500 mt-0.5">
                      {distanceLabel(commune.distanceKm)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
