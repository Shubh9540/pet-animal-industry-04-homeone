'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { GalleryImageProps, GalleryProps } from '@/types/templates.types';

const GalleryImage = ({ item, index, openLabel, onOpen }: GalleryImageProps) => (
  <button
    type="button"
    onClick={() => onOpen(index)}
    aria-label={`${openLabel}: ${item.imageAlt}`}
    className="group relative block aspect-[16/9] w-full overflow-hidden rounded-xl bg-[var(--color-bg-alt)]"
  >
    <Image
      src={item.image}
      alt={item.imageAlt}
      fill
      sizes="(min-width: 640px) 50vw, 100vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <span aria-hidden="true" className="absolute inset-0 bg-[var(--color-gallery-overlay)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </button>
);

export const Gallery = ({ data }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : data?.images[activeIndex] ?? null;
  const imageCount = data?.images.length ?? 0;

  useEffect(() => {
    if (activeIndex === null || !imageCount) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => index === null ? 0 : (index - 1 + imageCount) % imageCount);
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => index === null ? 0 : (index + 1) % imageCount);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, imageCount]);

  if (!data?.images.length) return null;

  const showPrevious = () => {
    setActiveIndex((index) => index === null ? 0 : (index - 1 + data.images.length) % data.images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => index === null ? 0 : (index + 1) % data.images.length);
  };

  return (
    <section id="gallery" className="w-full bg-[var(--color-white)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        <header className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-end lg:gap-12">
          <div>
            <span className="inline-flex rounded-md bg-[var(--color-gallery-badge)] px-3 py-2 text-sm font-semibold text-[var(--color-accent-light)]">
              {data.subtitle}
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--color-heading)] sm:text-5xl lg:text-6xl">
              <span className="block">{data.title}</span>
              <span className="block text-[var(--color-accent-light)]">{data.highlightedTitle}</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[var(--color-text-light)] sm:text-lg sm:leading-8 lg:justify-self-end">
            {data.description}
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-6">
          {data.images.map((item, index) => (
            <GalleryImage
              key={item.id}
              item={item}
              index={index}
              openLabel={data.openLabel}
              onOpen={setActiveIndex}
            />
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-black-90)] p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={activeImage.imageAlt}>
          <button type="button" onClick={() => setActiveIndex(null)} aria-label={data.closeLabel} className="absolute inset-0 cursor-default" />

          <div className="relative z-10 h-[72vh] w-full max-w-6xl sm:h-[82vh]">
            <Image src={activeImage.image} alt={activeImage.imageAlt} fill sizes="100vw" className="object-contain" priority />

            <button type="button" onClick={() => setActiveIndex(null)} aria-label={data.closeLabel} className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-white)] text-lg text-[var(--color-primary)] shadow-lg transition-colors hover:bg-[var(--color-surface-soft)]">
              <FaTimes aria-hidden="true" />
            </button>

            {data.images.length > 1 && (
              <>
                <button type="button" onClick={showPrevious} aria-label={data.previousLabel} className="absolute left-0 top-1/2 flex h-12 w-12 -translate-x-1 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-primary)] shadow-lg transition-colors hover:bg-[var(--color-surface-soft)] sm:-translate-x-5">
                  <FaChevronLeft aria-hidden="true" />
                </button>
                <button type="button" onClick={showNext} aria-label={data.nextLabel} className="absolute right-0 top-1/2 flex h-12 w-12 translate-x-1 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-primary)] shadow-lg transition-colors hover:bg-[var(--color-surface-soft)] sm:translate-x-5">
                  <FaChevronRight aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
