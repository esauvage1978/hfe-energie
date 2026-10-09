import { useState, useEffect, useCallback, useMemo } from "react";

import { createPortal } from "react-dom";

import { getPageThemeClasses, type PageColorScheme } from "@i18n/page-theme";



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

  colorScheme?: PageColorScheme;

}



export default function ProjectBeforeAfter({

  title,

  before,

  after,

  afters,

  closeLabel,

  prevLabel,

  nextLabel,

  colorScheme = "accent",

}: Props) {

  const theme = getPageThemeClasses(colorScheme);

  const showBefore = Boolean(before?.image);

  const afterSides = [...(after ? [after] : []), ...(afters ?? [])].filter((side) => side.image);



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

  const [mounted, setMounted] = useState(false);

  const [current, setCurrent] = useState(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);



  useEffect(() => {

    setMounted(true);

  }, []);



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

    if (!side?.image) return null;



    const slideIndex = slideIndexBySide.get(side) ?? null;



    const content = (

      <button

        type="button"

        onClick={() => slideIndex !== null && openAt(slideIndex)}

        className={`w-full focus:outline-none focus-visible:ring-2 ${theme.focusRing} rounded-xl`}

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



  const gridClass = showBefore

    ? "grid grid-cols-2 gap-3"

    : afterSides.length > 1

      ? "grid grid-cols-1 sm:grid-cols-2 gap-3"

      : "max-w-lg mx-auto";



  const lightbox =

    open && slides[current] ? (

      <div

        role="dialog"

        aria-modal="true"

        aria-label={slides[current].alt}

        className="fixed inset-0 z-[9999] bg-black/95"

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



        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-16 sm:px-12 gap-4">

          <img

            key={current}

            src={slides[current].src}

            alt={slides[current].alt}

            width={slides[current].width}

            height={slides[current].height}

            className="max-w-full max-h-[75dvh] w-auto h-auto object-contain select-none"

            draggable={false}

          />

          <p className="text-white/80 text-sm text-center max-w-lg">{slides[current].caption}</p>

        </div>

      </div>

    ) : null;



  return (

    <>

      <div className="rounded-2xl bg-white border border-neutral-200 p-5 md:p-6 shadow-sm">

        <h3 className={`font-display font-extrabold text-sm uppercase tracking-wider mb-4 ${theme.beforeAfterHeading}`}>{title}</h3>

        <div className={gridClass}>

          {showBefore && before && renderThumb(before, "bg-neutral-800/80")}

          {afterSides.map((side) => renderThumb(side, theme.beforeAfterBadge))}

        </div>

      </div>



      {mounted && lightbox && createPortal(lightbox, document.body)}

    </>

  );

}


