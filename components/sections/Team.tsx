import Image from 'next/image';
import { TeamProps } from '@/types/templates.types';

export const Team = ({ data }: TeamProps) => {
  if (!data?.members.length) return null;

  return (
    <section id="team" className="w-full bg-[var(--color-white)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        <header className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-end lg:gap-12">
          <div>
            <span className="inline-flex rounded-md bg-[var(--color-team-badge)] px-3 py-2 text-sm font-semibold text-[var(--color-accent-light)]">
              {data.eyebrow}
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

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {data.members.map((member) => (
            <article key={member.id} className="group overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface-soft)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-team-image-bg)]">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="bg-[var(--color-white-80)] px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="font-serif text-2xl font-semibold leading-tight text-[var(--color-heading)]">
                  {member.name}
                </h3>
                <p className="mt-2 text-base font-semibold text-[var(--color-accent-light)] sm:text-lg">
                  {member.role}
                </p>
                <span aria-hidden="true" className="mt-4 block h-px w-10 bg-[var(--color-accent-light)]" />
                <p className="mt-4 text-sm leading-6 text-[var(--color-text-light)] sm:text-base">
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
