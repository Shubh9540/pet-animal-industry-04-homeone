'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowRight, FaBars, FaPaw, FaTimes } from 'react-icons/fa';
import { HeaderProps } from '@/types/templates.types';

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  if (!data) return null;

  const navLinks = [...data.navLinksLeft, ...data.navLinksRight];
  const isActive = (url: string) => url === '/' ? pathname === '/' : pathname === url || pathname.startsWith(`${url}/`);

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full border-b border-[var(--color-header-border)] bg-[var(--color-white-95)] backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={data.logoUrl} aria-label={data.logoAlt} className="flex shrink-0 items-center gap-2.5 text-[var(--color-primary)]">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-soft)] text-xl sm:h-12 sm:w-12 sm:text-2xl">
            <FaPaw aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="font-heading text-2xl font-bold leading-none sm:text-3xl">{data.brandName}</span>
            <span className="mt-1 text-[8.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-light)] sm:text-[9.5px]">{data.brandTagline}</span>
          </span>
        </Link>

        <nav aria-label={data.logoAlt} className="hidden shrink items-center justify-center gap-3 lg:flex xl:gap-5">
          {navLinks.map((link) => {
            const active = isActive(link.url);
            return (
              <Link
                key={link.id}
                href={link.url}
                aria-current={active ? 'page' : undefined}
                className={`whitespace-nowrap py-2 text-xs font-medium transition-colors xl:text-sm ${
                  active
                    ? 'text-[var(--color-accent-light)] font-semibold'
                    : 'text-[var(--color-navigation)] hover:text-[var(--color-accent-light)]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href={data.contactButton.url}
          className="hidden shrink-0 items-center gap-3 rounded-full border-4 border-[var(--color-button-ring)] bg-[var(--color-primary)] px-5 py-2.5 text-xs font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-primary-light)] lg:flex xl:text-sm"
        >
          <span className="whitespace-nowrap">{data.contactButton.text}</span>
          <FaArrowRight aria-hidden="true" />
        </Link>

        <button
          type="button"
          aria-label={mobileMenuOpen ? data.closeMenuLabel : data.openMenuLabel}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-lg text-[var(--color-primary)] lg:hidden"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full flex max-h-[calc(100vh-5rem)] flex-col overflow-y-auto border-t border-[var(--color-border)] bg-[var(--color-white)] p-5 shadow-[var(--shadow-mobile-menu)] lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`rounded-xl px-4 py-3 text-base font-semibold ${
                isActive(link.url) ? 'bg-[var(--color-surface-active)] text-[var(--color-primary)]' : 'text-[var(--color-navigation)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={data.contactButton.url}
            className="mt-4 flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-white)]"
          >
            <span>{data.contactButton.text}</span>
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      )}
    </header>
  );
};
