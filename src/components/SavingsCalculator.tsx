import { useMemo, useState } from "react";

type EnergySource = "gaz" | "fioul" | "electrique";

const ENERGY_LABEL: Record<EnergySource, string> = {
  gaz: "Chaudière gaz",
  fioul: "Chaudière fioul",
  electrique: "Chauffage électrique",
};

// Approximative reference prices per kWh PCI (mai 2026, indicatif).
const PRICE_PER_KWH: Record<EnergySource, number> = {
  gaz: 0.115,
  fioul: 0.135,
  electrique: 0.2516,
};

// Estimated efficiency (existing systems) - PCI based.
const EFFICIENCY: Record<EnergySource, number> = {
  gaz: 0.85,
  fioul: 0.8,
  electrique: 1,
};

// Estimated COP / SCOP of a modern air-water heat pump.
const HEAT_PUMP_SCOP = 3.8;

const SURFACE_KWH_PER_M2 = 110;

export default function SavingsCalculator() {
  const [source, setSource] = useState<EnergySource>("gaz");
  const [surface, setSurface] = useState<number>(120);
  const [bill, setBill] = useState<number>(2200);

  const result = useMemo(() => {
    const estimatedFromBill = bill / PRICE_PER_KWH[source];
    const estimatedFromSurface = (surface * SURFACE_KWH_PER_M2) / EFFICIENCY[source];
    const annualKwhFinal = (estimatedFromBill + estimatedFromSurface) / 2;
    const annualKwhUseful = annualKwhFinal * EFFICIENCY[source];
    const pacKwhElec = annualKwhUseful / HEAT_PUMP_SCOP;
    const pacCost = pacKwhElec * PRICE_PER_KWH.electrique;
    const currentCost = annualKwhFinal * PRICE_PER_KWH[source];
    const savings = Math.max(0, currentCost - pacCost);
    const percent = currentCost > 0 ? Math.round((savings / currentCost) * 100) : 0;
    return {
      currentCost: Math.round(currentCost),
      pacCost: Math.round(pacCost),
      savings: Math.round(savings),
      percent,
    };
  }, [source, surface, bill]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="rounded-3xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-neutral-900">
            Estimez vos économies avec une pompe à chaleur
          </h3>
          <p className="mt-2 text-sm text-neutral-600">
            Simulation indicative basée sur les tarifs énergie en vigueur en 2026 et un SCOP moyen de 3,8.
            Le devis personnalisé reste la seule référence fiable.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="energy-source" className="block text-sm font-semibold text-neutral-800 mb-2">
                Système de chauffage actuel
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(ENERGY_LABEL) as EnergySource[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSource(key)}
                    aria-pressed={source === key}
                    className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border-2 transition-colors min-h-[48px] ${
                      source === key
                        ? "border-primary-600 bg-primary-600 text-white shadow"
                        : "border-neutral-200 bg-white text-neutral-700 hover:border-primary-300"
                    }`}
                  >
                    {ENERGY_LABEL[key]}
                  </button>
                ))}
              </div>
              <input type="hidden" id="energy-source" value={source} readOnly />
            </div>

            <div>
              <label htmlFor="surface" className="flex items-center justify-between text-sm font-semibold text-neutral-800 mb-2">
                <span>Surface chauffée</span>
                <span className="text-primary-700 font-bold">{surface} m²</span>
              </label>
              <input
                id="surface"
                type="range"
                min={40}
                max={400}
                step={5}
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                className="w-full accent-primary-600 h-2"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>40 m²</span>
                <span>400 m²</span>
              </div>
            </div>

            <div>
              <label htmlFor="bill" className="flex items-center justify-between text-sm font-semibold text-neutral-800 mb-2">
                <span>Facture annuelle actuelle</span>
                <span className="text-primary-700 font-bold">{fmt(bill)}</span>
              </label>
              <input
                id="bill"
                type="range"
                min={500}
                max={6000}
                step={50}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full accent-primary-600 h-2"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>500 €</span>
                <span>6 000 €</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="rounded-2xl bg-white border border-primary-200 p-6 shadow-md">
            <p className="text-xs uppercase tracking-wide text-neutral-500 font-bold">
              Économies estimées par an
            </p>
            <p className="mt-2 font-display text-4xl md:text-5xl font-extrabold text-primary-700">
              {fmt(result.savings)}
            </p>
            <p className="text-sm text-neutral-600 mt-1">
              soit <strong>{result.percent} %</strong> d'économies sur votre facture
            </p>

            <div className="mt-5 pt-5 border-t border-neutral-100 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-neutral-500 text-xs">Aujourd'hui</p>
                <p className="font-bold text-neutral-900">{fmt(result.currentCost)} / an</p>
              </div>
              <div>
                <p className="text-neutral-500 text-xs">Avec une PAC</p>
                <p className="font-bold text-primary-700">{fmt(result.pacCost)} / an</p>
              </div>
            </div>

            <a href="/contact" className="btn btn-primary w-full mt-6">
              Obtenir mon devis gratuit
            </a>
          </div>

          <p className="text-xs text-neutral-500 mt-3 text-center">
            Simulation indicative · Ne tient pas compte des aides MaPrimeRénov' & CEE.
          </p>
        </div>
      </div>
    </div>
  );
}
