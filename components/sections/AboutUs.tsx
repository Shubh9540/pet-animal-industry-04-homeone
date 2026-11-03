import { AboutUsProps } from '@/types/templates.types';

export const AboutUs = ({ data }: AboutUsProps) => {
  if (!data) return null;

  return (
    <section id="about" className="w-full bg-[var(--color-white)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.45fr_1.55fr] lg:items-start">
          <span className="w-fit rounded-full bg-[var(--color-surface-soft)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">{data.eyebrow}</span>
          <div>
            <h2 className="font-heading text-4xl font-bold leading-[0.95] text-[var(--color-primary)] sm:text-6xl lg:text-7xl">
              <span className="block">{data.titleLine1}</span><span className="block text-[var(--color-accent-light)]">{data.highlightedTitle}</span>
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--color-navigation)] sm:text-lg">{data.description}</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {data.stats.map((stat, index) => (
            <article key={stat.id} className={`${index === 1 ? 'bg-[var(--color-white)]' : 'bg-[var(--color-stats-card)]'} rounded-2xl border border-[var(--color-border)] p-7 sm:p-8`}>
              <p className="font-heading text-5xl font-bold text-[var(--color-primary)]">{stat.value}</p>
              <span aria-hidden="true" className="my-4 block h-px w-40 bg-[var(--color-accent-soft)]" />
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">{stat.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
