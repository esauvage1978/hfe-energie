import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
  idPrefix?: string;
}

export default function Faq({ items, idPrefix = "faq" }: FaqProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        const id = `${idPrefix}-${idx}`;
        return (
          <article
            key={id}
            className={`rounded-2xl border bg-white transition-colors ${
              isOpen ? "border-primary-200 shadow-md" : "border-neutral-200"
            }`}
          >
            <h3 className="m-0">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5 min-h-[60px] font-display font-semibold text-base md:text-lg text-neutral-900"
              >
                <span>{item.question}</span>
                <span
                  className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-700 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-button`}
              hidden={!isOpen}
              className="px-5 pb-5 md:px-6 md:pb-6 text-neutral-700 leading-relaxed text-[15px]"
            >
              {item.answer.split("\n").map((line, i) => (
                <p key={i} className={i > 0 ? "mt-2" : undefined}>
                  {line}
                </p>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
