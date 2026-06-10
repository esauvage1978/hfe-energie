import { useState, useEffect, useCallback, useRef, useMemo } from "react";

interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Side {
  caption: string;
  badge: string;
  image?: ProjectImage;
}

interface Props {
  title: string;
  before?: Side;
  after?: Side;
  afters?: Side[];
  closeLabel: string;
  prevLabel: string;
  nextLabel: string;
}

export default function ProjectBeforeAfter({
  title,
  before,
  after,
  afters,
  closeLabel,
  prevLabel,
  nextLabel,
}: Props) {
  const afterSides = afters ?? (after ? [after] : []);

  const slides = useMemo(() => {
    const list: (ProjectImage & { badge: string; caption: string })[] = [];
    if (before?.image) {
      list.push({ ...before.image, badge: before.badge, caption: before.caption });
    }
    for (const side of afterSides) {
      if (side.image) {
        list.push({ ...side.image, badge: side.badge, caption: side.caption });
      }
    }
    return list;
  }, [before, afterSides]);

  const slideIndexBySide = useMemo(() => {
    const map = new WeakMap<Side, number>();
    let idx = 0;
    if (before?.image) {
      map.set(before, idx++);
    }
    for (const side of afterSides) {
      if (side.image) {
        map.set(side, idx++);
      }
    }
    return map;
  }, [before, afterSides]);

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openAt = useCallback((idx: number) => {
    setCurrent(idx);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    [slides.length],
  );

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (dialog?.open) dialog.close();
    };
  }, [open, close, prev, next]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 50) {
      diff > 0 ? prev() : next();
    }
    setTouchStart(null);
  };

  const renderThumb = (side: Side | undefined, badgeClass: string) => {
    if (!side) return null;

    const slideIndex = slideIndexBySide.get(side) ?? null;

    const content = side.image ? (
      <button
        type="button"
        onClick={() => slideIndex !== null && openAt(slideIndex)}
        className="w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-xl"
        aria-label={side.image.alt}
      >
        <picture>
          <source srcSet={`${side.image.src}.avif`} type="image/avif" />
          <source srcSet={`${side.image.src}.webp`} type="image/webp" />
          <img
            src={side.image.src}
            alt={side.image.alt}
            width={side.image.width}
            height={side.image.height}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover rounded-xl cursor-zoom-in hover:brightness-95 transition-all"
          />
        </picture>
      </button>
    ) : (
      <div className="w-full aspect-[4/3] rounded-xl bg-neutral-100 border border-dashed border-neutral-300 flex items-center justify-center p-4">
        <p className="text-sm text-neutral-500 text-center leading-snug">{side.caption}</p>
      </div>
    );

    return (
      <div className="relative">
        {content}
        {side.badge && (
          <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-white text-xs font-semibold pointer-events-none ${badgeClass}`}>
            {side.badge}
          </span>
        )}
        {side.image && <p className="mt-2 text-xs text-neutral-600 text-center">{side.caption}</p>}
      </div>
    );
  };

  const gridClass = before
    ? "grid grid-cols-2 gap-3"
    : afterSides.length > 1
      ? "grid grid-cols-1 sm:grid-cols-2 gap-3"
      : "max-w-lg mx-auto";

  return (
    <>
      <div className="rounded-2xl bg-white border border-neutral-200 p-5 md:p-6 shadow-sm">
        <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-accent-800 mb-4">{title}</h3>
        <div className={gridClass}>
          {before && renderThumb(before, "bg-neutral-800/80")}
          {afterSides.map((side) => renderThumb(side, "bg-accent-600"))}
        </div>
      </div>

      {open && slides.length > 0 && (
        <dialog
          ref={dialogRef}
          className="fixed inset-0 z-[9999] m-0 h-dvh w-dvw max-h-dvh max-w-dvw bg-black/95 backdrop:bg-black/95 p-0 border-none"
          onCancel={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label={closeLabel}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="absolute top-4 left-4 z-10 text-white/90 text-sm font-medium">
            <span className="inline-block px-2 py-0.5 rounded bg-white/10 mr-2">{slides[current].badge}</span>
            {slides.length > 1 && (
              <span className="text-white/70 tabular-nums">
                {current + 1} / {slides.length}
              </span>
            )}
          </div>

          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label={prevLabel}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label={nextLabel}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          <div className="flex flex-col items-center justify-center w-full h-full p-12 sm:p-16 gap-4">
            <img
              key={current}
              src={slides[current].src}
              alt={slides[current].alt}
              className="max-w-full max-h-[calc(100%-3rem)] object-contain select-none"
              draggable={false}
            />
            <p className="text-white/80 text-sm text-center max-w-lg">{slides[current].caption}</p>
          </div>
        </dialog>
      )}
    </>
  );
}
