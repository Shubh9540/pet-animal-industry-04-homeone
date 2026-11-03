'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { ContactCardProps, ContactProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaEnvelope': return <FaEnvelope aria-hidden="true" />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt aria-hidden="true" />;
    case 'FaPhoneAlt': return <FaPhoneAlt aria-hidden="true" />;
    default: return null;
  }
};

const ContactCard = ({ item }: ContactCardProps) => (
  <a href={item.url} className="group rounded-xl bg-[var(--color-surface-soft-70)] p-5 transition-colors hover:bg-[var(--color-surface-soft)]">
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-contact-icon-bg)] text-xl text-[var(--color-accent-light)] transition-colors group-hover:bg-[var(--color-contact-icon-hover)]">
      {renderIcon(item.icon)}
    </span>
    <span className="mt-4 block font-serif text-xl font-semibold text-[var(--color-heading)]">{item.title}</span>
    <span className="mt-1 block text-sm leading-5 text-[var(--color-text-light)]">
      {item.lines.map((line) => <span key={line.id} className="block">{line.text}</span>)}
    </span>
  </a>
);

export const Contact = ({ data }: ContactProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section id="contact" className="w-full bg-[var(--color-white)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div>
            <span className="inline-flex rounded-md bg-[var(--color-contact-badge)] px-3 py-2 text-sm font-semibold text-[var(--color-accent-light)]">
              {data.intro.eyebrow}
            </span>

            <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--color-heading)] sm:text-5xl lg:text-6xl">
              <span className="block">{data.intro.title}</span>
              <span className="block text-[var(--color-accent-light)]">{data.intro.highlightedTitle}</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-text-light)] sm:text-lg sm:leading-8">
              {data.intro.description}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {data.contactItems.map((item) => <ContactCard key={item.id} item={item} />)}
            </div>
          </div>

          <div className="rounded-2xl bg-[var(--color-surface-soft-70)] p-5 sm:p-7">
            <h3 className="font-serif text-2xl font-semibold text-[var(--color-heading)] sm:text-3xl">{data.form.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{data.form.description}</p>

            <form className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2" onChange={() => setSubmitted(false)} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }}>
              <input name="name" required placeholder={data.form.namePlaceholder} aria-label={data.form.namePlaceholder} className="w-full rounded-lg border border-[var(--color-border-form)] bg-[var(--color-contact-field-bg)] px-4 py-3 text-sm text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-accent-light)]" />
              <input name="email" type="email" required placeholder={data.form.emailPlaceholder} aria-label={data.form.emailPlaceholder} className="w-full rounded-lg border border-[var(--color-border-form)] bg-[var(--color-contact-field-bg)] px-4 py-3 text-sm text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-accent-light)]" />
              <input name="phone" type="tel" placeholder={data.form.phonePlaceholder} aria-label={data.form.phonePlaceholder} className="w-full rounded-lg border border-[var(--color-border-form)] bg-[var(--color-contact-field-bg)] px-4 py-3 text-sm text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-accent-light)] sm:col-span-2" />
              <select name="service" required defaultValue="" aria-label={data.form.servicePlaceholder} className="w-full rounded-lg border border-[var(--color-border-form)] bg-[var(--color-contact-field-bg)] px-4 py-3 text-sm text-[var(--color-placeholder)] outline-none transition-colors focus:border-[var(--color-accent-light)] sm:col-span-2">
                <option value="" disabled>{data.form.servicePlaceholder}</option>
                {data.form.serviceOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
              </select>
              <textarea name="message" required rows={4} placeholder={data.form.messagePlaceholder} aria-label={data.form.messagePlaceholder} className="w-full resize-y rounded-lg border border-[var(--color-border-form)] bg-[var(--color-contact-field-bg)] px-4 py-3 text-sm text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-accent-light)] sm:col-span-2" />

              <button type="submit" className="inline-flex w-full items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-light)] px-5 py-3.5 text-sm font-semibold text-[var(--color-white)] transition-opacity hover:opacity-90 sm:col-span-2">
                <span>{data.form.buttonText}</span>
                <FaArrowRight aria-hidden="true" />
              </button>
              {submitted && <p role="status" className="text-sm leading-6 text-[var(--color-primary)] sm:col-span-2">{data.form.successMessage}</p>}
            </form>
          </div>
        </div>

        <div className="relative mt-8 h-56 overflow-hidden rounded-xl sm:h-64 lg:h-72">
          <Image src={data.map.image} alt={data.map.imageAlt} fill sizes="(min-width: 1024px) 1240px, 100vw" className="object-cover" />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-xl bg-[var(--color-white-95)] px-5 py-4 shadow-[var(--shadow-contact-card)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-contact-icon-bg)] text-xl text-[var(--color-accent-light)]">
              <FaMapMarkerAlt aria-hidden="true" />
            </span>
            <span>
              <span className="block font-heading text-base font-bold text-[var(--color-heading)]">{data.map.label}</span>
              <span className="block text-sm text-[var(--color-text-light)]">{data.map.sublabel}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
