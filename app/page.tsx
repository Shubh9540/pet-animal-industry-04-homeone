import React from 'react';
import { PetTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Team } from '@/components/sections/Team';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData?.categories?.Pet?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-bg-main)] pt-20">
      <Header data={sectionData.Header?.variants?.PetHeader2} />
      <Hero data={sectionData.Hero?.variants?.PetHero2} />
      <Services data={sectionData.Services?.variants?.PetServices2} />
      <AboutUs data={sectionData.AboutUs?.variants?.PetAboutUs2} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.PetWhyChooseUs2} />
      <Team data={sectionData.Team?.variants?.PetTeam2} />
      <Gallery data={sectionData.Gallery?.variants?.PetGallery2} />
      <Testimonials data={sectionData.Testimonials?.variants?.PetTestimonials2} />
      <Faq data={sectionData.Faq?.variants?.PetFaq2} />
      <Contact data={sectionData.Contact?.variants?.PetContact2} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
