import { useMemo, useState } from "react";
import type { Locale } from "@i18n";
import { getCalculatorStrings, pathFor } from "@i18n";

type EnergySource = "gaz" | "fioul" | "electrique";

const PRICE_PER_KWH: Record<EnergySource, number> = {
  gaz: 0.115,
  fioul: 0.135,
  electrique: 0.2516,
};

const EFFICIENCY: Record<EnergySource, number> = {
  gaz: 0.85,
  fioul: 0.8,
  electrique: 1,
};

const HEAT_PUMP_SCOP = 3.8;
const SURFACE_KWH_PER_M2 = 110;

interface SavingsCalculatorProps {
  locale: Locale;
}

export default function SavingsCalculator({ locale }: SavingsCalculatorProps) {
  const t = getCalculatorStrings(locale);
  const contactHref = pathFor("contact", locale);

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
    new Intl.NumberFormat(t.localeTag, {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  const energyKeys = Object.keys(t.energy) as EnergySource[];

  return (
    <div className="rounded-3xl border border-accent-200 bg-gradient-to-br from-accent-50 to-white p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-neutral-900">{t.title}</h3>
          <p className="mt-2 text-sm text-neutral-600">{t.intro}</p>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="energy-source" className="block text-sm font-semibold text-neutral-800 mb-2">
                {t.currentSystem}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {energyKeys.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSource(key)}
                    aria-pressed={source === key}
                    className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border-2 transition-colors min-h-[48px] ${
                      source === key
                        ? "border-accent-600 bg-accent-600 text-white shadow"
                        : "border-neutral-200 bg-white text-neutral-700 hover:border-accent-300"
                    }`}
                  >
                    {t.energy[key]}
                  </button>
                ))}
              </div>
              <input type="hidden" id="energy-source" value={source} readOnly />
            </div>

            <div>
              <label
                htmlFor="surface"
                className="flex items-center justify-between text-sm font-semibold text-neutral-800 mb-2"
              >
                <span>{t.heatedSurface}</span>
                <span className="text-accent-700 font-bold">
                  {surface} m²
                </span>
              </label>
              <input
                id="surface"
                type="range"
                min={40}
                max={400}
                step={5}
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                className="w-full accent-accent-600 h-2"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>{t.surfaceMin}</span>
                <span>{t.surfaceMax}</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="bill"
                className="flex items-center justify-between text-sm font-semibold text-neutral-800 mb-2"
              >
                <span>{t.annualBill}</span>
                <span className="text-accent-700 font-bold">{fmt(bill)}</span>
              </label>
              <input
                id="bill"
                type="range"
                min={500}
                max={6000}
                step={50}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full accent-accent-600 h-2"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-1">
                <span>{t.billMin}</span>
                <span>{t.billMax}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="rounded-2xl bg-white border border-accent-200 p-6 shadow-md">
            <p className="text-xs uppercase tracking-wide text-neutral-500 font-bold">{t.savingsLabel}</p>
            <p className="mt-2 font-display text-4xl md:text-5xl font-extrabold text-accent-700">
              {fmt(result.savings)}
            </p>
            <p className="text-sm text-neutral-600 mt-1">
              {t.savingsPercent(result.percent)}
            </p>

            <div className="mt-5 pt-5 border-t border-neutral-100 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-neutral-500 text-xs">{t.today}</p>
                <p className="font-bold text-neutral-900">
                  {fmt(result.currentCost)}
                  {t.perYear}
                </p>
              </div>
              <div>
                <p className="text-neutral-500 text-xs">{t.withPac}</p>
                <p className="font-bold text-accent-700">
                  {fmt(result.pacCost)}
                  {t.perYear}
                </p>
              </div>
            </div>

            <a href={contactHref} className="btn btn-accent w-full mt-6">
              {t.cta}
            </a>
          </div>

          <p className="text-xs text-neutral-500 mt-3 text-center">{t.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
