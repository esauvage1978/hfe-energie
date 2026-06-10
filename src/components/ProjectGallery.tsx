import { useState, useEffect, useCallback, useRef } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Props {
  images: GalleryImage[];
  eager?: boolean;
}

export default function ProjectGallery({ images, eager = false }: Props) {
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
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length],
  );

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length],
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

  return (
    <>
      {/* Thumbnail grid */}
      <div>
        <button
          type="button"
          onClick={() => openAt(0)}
          className="w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-2xl"
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
                className="w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-xl"
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

      {/* Lightbox */}
      {open && (
        <dialog
          ref={dialogRef}
          className="fixed inset-0 z-[9999] m-0 h-dvh w-dvw max-h-dvh max-w-dvw bg-black/95 backdrop:bg-black/95 p-0 border-none"
          onCancel={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Fermer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 text-white/70 text-sm font-medium tabular-nums">
            {current + 1} / {images.length}
          </div>

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Photo précédente"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Photo suivante"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <div className="flex items-center justify-center w-full h-full p-12 sm:p-16">
            <img
              key={current}
              src={images[current].src}
              alt={images[current].alt}
              className="max-w-full max-h-full object-contain select-none animate-fade-in"
              draggable={false}
            />
          </div>

          {/* Dot indicators (mobile) */}
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
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          )}
        </dialog>
      )}
    </>
  );
}
