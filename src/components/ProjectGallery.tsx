import { useState, useEffect, useCallback } from "react";

import { createPortal } from "react-dom";

import type { Locale } from "@i18n/config";

import { getProjectsUi } from "@i18n/content/projects-shared";

import { getPageThemeClasses, type PageColorScheme } from "@i18n/page-theme";



interface GalleryImage {

  src: string;

  alt: string;

  width: number;

  height: number;

}



interface Props {

  images: GalleryImage[];

  locale: Locale;

  eager?: boolean;

  colorScheme?: PageColorScheme;

  closeLabel: string;

  prevLabel: string;

  nextLabel: string;

}



export default function ProjectGallery({

  images,

  locale,

  eager = false,

  colorScheme = "accent",

  closeLabel,

  prevLabel,

  nextLabel,

}: Props) {

  const theme = getPageThemeClasses(colorScheme);

  const ui = getProjectsUi(locale);

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

    () => setCurrent((c) => (c - 1 + images.length) % images.length),

    [images.length],

  );



  const next = useCallback(

    () => setCurrent((c) => (c + 1) % images.length),

    [images.length],

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



  const handleTouchStart = (e: React.TouchEvent) =>

    setTouchStart(e.touches[0].clientX);



  const handleTouchEnd = (e: React.TouchEvent) => {

    if (touchStart === null) return;

    const diff = e.changedTouches[0].clientX - touchStart;

    if (Math.abs(diff) > 50) {

      diff > 0 ? prev() : next();

    }

    setTouchStart(null);

  };



  const gridClass =

    images.length <= 3 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3";



  const lightbox =

    open && images[current] ? (

      <div

        role="dialog"

        aria-modal="true"

        aria-label={images[current].alt}

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



        <div className="absolute top-4 left-4 z-10 text-white/70 text-sm font-medium tabular-nums">

          {current + 1} / {images.length}

        </div>



        {images.length > 1 && (

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



        <div className="absolute inset-0 flex items-center justify-center px-4 py-16 sm:px-12">

          <img

            key={current}

            src={images[current].src}

            alt={images[current].alt}

            width={images[current].width}

            height={images[current].height}

            className="max-w-full max-h-[85dvh] w-auto h-auto object-contain select-none"

            draggable={false}

          />

        </div>



        {images.length > 1 && (

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">

            {images.map((_, i) => (

              <button

                key={i}

                type="button"

                onClick={() => setCurrent(i)}

                className={`w-2 h-2 rounded-full transition-all ${

                  i === current ? "bg-white w-4" : "bg-white/40"

                }`}

                aria-label={ui.lightboxPhoto(i + 1)}

              />

            ))}

          </div>

        )}

      </div>

    ) : null;



  return (

    <>

      <div>

        <button

          type="button"

          onClick={() => openAt(0)}

          className={`w-full focus:outline-none focus-visible:ring-2 ${theme.focusRing} rounded-2xl`}

          aria-label={images[0].alt}

        >

          <picture>

            <source srcSet={`${images[0].src}.avif`} type="image/avif" />

            <source srcSet={`${images[0].src}.webp`} type="image/webp" />

            <img

              src={images[0].src}

              alt={images[0].alt}

              width={images[0].width}

              height={images[0].height}

              loading={eager ? "eager" : "lazy"}

              className="w-full rounded-2xl shadow-lg border border-neutral-100 object-cover cursor-zoom-in"

            />

          </picture>

        </button>



        {images.length > 1 && (

          <div className={`mt-3 grid gap-3 ${gridClass}`}>

            {images.slice(1).map((img, i) => (

              <button

                key={i}

                type="button"

                onClick={() => openAt(i + 1)}

                className={`w-full focus:outline-none focus-visible:ring-2 ${theme.focusRing} rounded-xl`}

                aria-label={img.alt}

              >

                <picture>

                  <source srcSet={`${img.src}.avif`} type="image/avif" />

                  <source srcSet={`${img.src}.webp`} type="image/webp" />

                  <img

                    src={img.src}

                    alt={img.alt}

                    width={img.width}

                    height={img.height}

                    loading="lazy"

                    className="w-full rounded-xl border border-neutral-100 object-cover aspect-[4/3] cursor-zoom-in hover:brightness-90 transition-all"

                  />

                </picture>

              </button>

            ))}

          </div>

        )}

      </div>



      {mounted && lightbox && createPortal(lightbox, document.body)}

    </>

  );

}


