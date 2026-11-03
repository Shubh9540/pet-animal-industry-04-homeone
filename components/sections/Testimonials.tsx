import Image from 'next/image';
import { TestimonialsProps } from '@/types/templates.types';

export const Testimonials = ({ data }: TestimonialsProps) => {
  if (!data?.testimonials.length) return null;
  const testimonial = data.testimonials[0];

  return (
    <section id="testimonials" className="w-full bg-[var(--color-white)] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:px-8">
        <div>
          <span className="inline-flex rounded-full bg-[var(--color-surface-soft)] px-5 py-2 text-xs font-semibold text-[var(--color-primary)] sm:text-sm">{data.subtitle}</span>
          <blockquote className="mt-7 max-w-3xl text-2xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl">{testimonial.quote}</blockquote>
          <p className="mt-8 text-xl font-bold text-[var(--color-primary)]">{testimonial.name}</p>
          <p className="mt-1 text-base text-[var(--color-accent-light)]">{testimonial.location}</p>
        </div>
        <div className="relative min-h-[330px] overflow-hidden rounded-3xl sm:min-h-[400px]">
          <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
};
