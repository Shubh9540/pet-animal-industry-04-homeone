'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaqProps } from '@/types/templates.types';

export const Faq = ({ data }: FaqProps) => {
  const [activeId, setActiveId] = useState<string | null>(data?.items[0]?.id ?? null);

  if (!data?.items.length) return null;

  return (
    <section id="faq" className="w-full overflow-hidden bg-[var(--color-white)] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-start gap-8 px-4 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-8">
        <div>
          <span className="inline-flex rounded-md bg-[var(--color-faq-badge)] px-3 py-2 text-sm font-semibold text-[var(--color-accent-light)]">
            {data.subtitle}
          </span>

          <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--color-heading)] sm:text-5xl lg:text-6xl">
            <span className="block">{data.title1}</span>
            <span className="block text-[var(--color-accent-light)]">{data.highlightedTitle}</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-text-light)] sm:text-lg sm:leading-8">
            {data.description}
          </p>

          <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden sm:mt-8">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:pt-8">
          {data.items.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <article key={item.id} className={`overflow-hidden rounded-xl border transition-colors duration-300 ${isOpen ? 'border-[var(--color-faq-active-border)] bg-[var(--color-faq-card-active)]' : 'border-[var(--color-border-soft)] bg-[var(--color-white)]'}`}>
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-answer`}
                  aria-label={isOpen ? `${data.collapseLabel}: ${item.question}` : `${data.expandLabel}: ${item.question}`}
                  className="flex w-full items-center gap-2 px-4 py-4 text-left sm:gap-3 sm:px-5"
                >
                  <span className="font-heading text-base font-bold text-[var(--color-heading)] sm:text-lg">
                    {item.number}
                  </span>
                  <span className="flex-1 font-heading text-base font-bold leading-6 text-[var(--color-heading)] sm:text-lg">
                    {item.question}
                  </span>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-faq-active-border)] text-sm text-[var(--color-heading)]">
                    {isOpen ? <FaMinus aria-hidden="true" /> : <FaPlus aria-hidden="true" />}
                  </span>
                </button>

                <div id={`${item.id}-answer`} className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 text-sm leading-6 text-[var(--color-text-light)] sm:px-5 sm:text-base sm:leading-7">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
