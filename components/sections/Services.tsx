import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCut, FaPaw, FaStethoscope, FaSyringe } from 'react-icons/fa';
import { ServicesProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaStethoscope': return <FaStethoscope aria-hidden="true" />;
    case 'FaSyringe': return <FaSyringe aria-hidden="true" />;
    case 'FaCut': return <FaCut aria-hidden="true" />;
    default: return <FaPaw aria-hidden="true" />;
  }
};

export const Services = ({ data, limit }: ServicesProps) => {
  if (!data?.services.length) return null;
  const visibleServices = (typeof limit === 'number' ? data.services.slice(0, limit) : data.services).slice(0, 3);

  return (
    <section id="services" className="w-full bg-[var(--color-white)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-5 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent-light)] sm:text-sm">
            <span>{data.subtitle}</span><span aria-hidden="true" className="h-px w-16 bg-[var(--color-accent-light)]" />
          </div>
          <h2 className="mx-auto mt-5 max-w-4xl font-heading text-4xl font-bold leading-[0.95] text-[var(--color-primary)] sm:text-6xl lg:text-7xl">
            <span className="block">{data.titleLine1}</span><span className="block text-[var(--color-accent-light)]">{data.highlightedTitle}</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {visibleServices.map((service, index) => (
            <article key={service.id} className={`${index === 0 ? 'md:col-span-2 md:grid-cols-2' : ''} group relative grid min-h-[330px] overflow-hidden rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-service-card)]`}>
              <Image src={service.image} alt={service.imageAlt} fill sizes={index === 0 ? '(min-width: 768px) 55vw, 100vw' : '(min-width: 768px) 45vw, 100vw'} className={`object-cover transition-transform duration-500 group-hover:scale-[1.02] ${index === 0 ? 'object-left md:w-3/5' : 'object-center'}`} />
              <div className={`absolute inset-0 ${index === 0 ? 'bg-[linear-gradient(90deg,transparent_30%,var(--color-service-overlay)_64%)]' : 'bg-[linear-gradient(90deg,var(--color-service-overlay)_0%,transparent_75%)]'}`} />
              <div className={`${index === 0 ? 'md:col-start-2 md:justify-self-end' : ''} relative z-10 flex w-full max-w-sm flex-col items-start justify-center p-7 sm:p-9`}>
                <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-accent-light)] text-2xl text-[var(--color-white)]">{renderIcon(service.icon)}</span>
                <span aria-hidden="true" className="mb-4 h-0.5 w-12 bg-[var(--color-primary)]" />
                <h3 className="font-heading text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">{service.title}</h3>
                <Link href={service.url} className="mt-6 inline-flex items-center gap-5 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-primary-light)]">
                  <span>{service.buttonText}</span><FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
