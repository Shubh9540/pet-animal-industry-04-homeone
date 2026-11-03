import Link from 'next/link';
import { FaPaw } from 'react-icons/fa';
import { FooterProps } from '@/types/templates.types';

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="bg-[var(--color-white)] px-4 pb-6 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[var(--color-border)] pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <Link href={data.logoUrl} aria-label={data.logoAlt} className="inline-flex items-center gap-3 text-[var(--color-primary)]">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-surface-soft)] text-2xl"><FaPaw aria-hidden="true" /></span>
              <span className="flex flex-col"><span className="font-heading text-5xl font-bold leading-none">{data.brandName}</span><span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-accent-light)]">{data.brandTagline}</span></span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{data.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--color-primary)]">{data.quickLinksTitle}</h3>
            <ul className="mt-5 space-y-3">{data.quickLinks.map((link) => <li key={link.id}><Link href={link.url} className="text-sm text-[var(--color-navigation)] hover:text-[var(--color-accent-light)] sm:text-base">{link.label}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--color-primary)]">{data.contactTitle}</h3>
            <ul className="mt-5 space-y-3">{data.supportLinks.map((link) => <li key={link.id}><Link href={link.url} className="text-sm text-[var(--color-navigation)] hover:text-[var(--color-accent-light)] sm:text-base">{link.label}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--color-primary)]">{data.socialTitle}</h3>
            <ul className="mt-5 space-y-3">{data.socialLinks.map((link) => <li key={link.id}><a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-navigation)] hover:text-[var(--color-accent-light)] sm:text-base">{link.label}</a></li>)}</ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-5 text-xs text-[var(--color-text-light)] sm:flex-row sm:items-center sm:justify-between sm:text-sm"><p>{data.copyrightText}</p><p>{data.creditText}</p></div>
      </div>
    </footer>
  );
};
