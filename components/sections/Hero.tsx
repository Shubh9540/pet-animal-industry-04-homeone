import Image from 'next/image';
import { HeroProps } from '@/types/templates.types';

export const Hero = ({ data }: HeroProps) => {
  if (!data) return null;

  return (
    <section id="hero" className="relative min-h-[520px] w-full overflow-hidden bg-[var(--color-hero-bg)] sm:min-h-[600px] lg:min-h-[650px]">
      <Image src={data.image} alt={data.imageAlt} fill priority sizes="100vw" className="object-cover object-[66%_center] sm:object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-hero-overlay)_0%,var(--color-hero-overlay-soft)_48%,transparent_72%)]" />
      <div className="relative mx-auto flex min-h-[520px] w-full max-w-[1280px] items-center px-4 py-10 sm:min-h-[600px] sm:px-6 lg:min-h-[650px] lg:px-8">
        <div className="max-w-[720px] pt-10 sm:pt-0">
          <div className="mb-7 flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-light)] sm:text-sm">
            <span>{data.eyebrow}</span><span aria-hidden="true" className="h-px w-16 bg-[var(--color-accent-light)]" />
          </div>
          <h1 className="font-heading text-5xl font-bold leading-[0.9] tracking-[-0.04em] text-[var(--color-primary)] sm:text-7xl lg:text-8xl">
            <span className="block">{data.titleLine1}</span>
            <span className="block text-[var(--color-accent-light)]">{data.highlightedTitle}</span>
            <span className="block">{data.titleLine2}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};
