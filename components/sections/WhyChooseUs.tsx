import Image from 'next/image';
import { WhyChooseUsProps } from '@/types/templates.types';

export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  if (!data) return null;

  return (
    <section id="why-choose-us" className="w-full bg-[var(--color-white)] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 px-4 lg:grid-cols-[1.05fr_0.9fr_0.75fr] lg:gap-10 lg:px-8">
        <div>
          {data.badge && <span className="inline-flex rounded-lg bg-[var(--color-surface-soft)] px-4 py-2 text-xs font-semibold text-[var(--color-primary)] sm:text-sm">{data.badge}</span>}
          <h2 className="mt-6 font-heading text-4xl font-bold leading-[0.98] text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
            <span className="block">{data.title}</span>
            <span className="block text-[var(--color-accent-light)]">{data.highlightedTitle}</span>
            {data.titleLine2 && <span className="block">{data.titleLine2}</span>}
          </h2>
        </div>

        {data.image && data.imageAlt && (
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl sm:min-h-[440px]">
            <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover" />
          </div>
        )}

        <div className="flex flex-col gap-7">
          {data.description && <p className="text-base leading-7 text-[var(--color-navigation)] sm:text-lg sm:leading-8">{data.description}</p>}
          {data.reviewValue && data.reviewLabel && (
            <div className="rounded-2xl bg-[var(--color-stats-card)] p-8">
              <p className="font-heading text-5xl font-bold text-[var(--color-primary)] sm:text-6xl">{data.reviewValue}</p>
              <span aria-hidden="true" className="my-4 block h-px w-28 bg-[var(--color-accent-soft)]" />
              <p className="text-base text-[var(--color-text-light)] sm:text-lg">{data.reviewLabel}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
