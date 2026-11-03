import type { CSSProperties } from 'react';

export interface ThemeFontsData {
  primary: string;
  heading: string;
  navigation: string;
}

export interface ThemeData {
  fonts: ThemeFontsData;
}

export type ThemeFontVariables = CSSProperties & {
  '--font-primary': string;
  '--font-heading': string;
  '--font-navigation': string;
};

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logoAlt: string;
  logoUrl: string;
  brandName: string;
  brandTagline: string;
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  contactButton: { text: string; url: string };
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface GlobalUIData {
  breadcrumbSeparator?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface GalleryData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  openLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  images: GalleryItem[];
}

export interface GalleryProps {
  data?: GalleryData;
}

export interface GalleryImageProps {
  item: GalleryItem;
  index: number;
  openLabel: string;
  onOpen: (index: number) => void;
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  expandLabel: string;
  collapseLabel: string;
  items: FaqItem[];
}

export interface FaqProps {
  data?: FaqData;
}

export interface HeroData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  highlightedTitle: string;
  image: string;
  imageAlt: string;
}

export interface HeroProps {
  data?: HeroData;
}

export interface AboutUsData {
  eyebrow: string;
  titleLine1: string;
  highlightedTitle: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
  stats: AboutStatItem[];
}

export interface AboutStatItem {
  id: string;
  value: string;
  title: string;
  description: string;
}

export interface AboutUsProps {
  data?: AboutUsData;
  showButton?: boolean;
}

export interface ServicesItem {
  id: string;
  title: string;
  icon: string;
  url: string;
  image: string;
  imageAlt: string;
  buttonText: string;
}

export interface ServicesData {
  subtitle: string;
  titleLine1: string;
  highlightedTitle: string;
  linkText?: string;
  linkUrl?: string;
  services: ServicesItem[];
}

export interface ServicesProps {
  data?: ServicesData;
  limit?: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
}

export interface TestimonialsData {
  subtitle: string;
  image: string;
  imageAlt: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface TeamData {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  members: TeamMember[];
}

export interface TeamProps {
  data?: TeamData;
}

export interface FooterSocialLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterQuickLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterData {
  logoAlt: string;
  logoUrl: string;
  brandName: string;
  brandTagline: string;
  description: string;
  copyrightText: string;
  quickLinksTitle: string;
  contactTitle: string;
  socialTitle: string;
  socialLinks: FooterSocialLink[];
  quickLinks: FooterQuickLink[];
  supportLinks: FooterQuickLink[];
  creditText: string;
}

export interface FooterProps {
  data?: FooterData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: {
    home: TemplateComponentPage;
  };
}

export interface WhyChooseUsData {
  badge?: string;
  subtitle?: string;
  title: string;
  titleLine2?: string;
  highlightedTitle: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  reviewValue?: string;
  reviewLabel?: string;
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
  url?: string;
}

export interface ContactCardProps {
  item: ContactInfoItem;
}

export interface ContactServiceOption {
  id: string;
  label: string;
  value: string;
}

export interface ContactData {
  intro: {
    eyebrow: string;
    title: string;
    highlightedTitle: string;
    description: string;
  };
  form: {
    title: string;
    description: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    servicePlaceholder: string;
    serviceOptions: ContactServiceOption[];
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
  };
  map: {
    image: string;
    imageAlt: string;
    label: string;
    sublabel: string;
  };
  contactItems: ContactInfoItem[];
}

export interface ContactProps {
  data?: ContactData;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
}

export interface PetTemplateData {
  common: {
    theme: ThemeData;
    metadata: SiteMetadataData;
    globalUI: GlobalUIData;
    Footer?: FooterData;
  };
  categories: {
    Pet: {
      templateComponents?: TemplateComponentsData;
      sections: {
        Header?: { variants?: { PetHeader2?: HeaderData } };
        Hero?: { variants?: { PetHero2?: HeroData } };
        Services?: { variants?: { PetServices2?: ServicesData } };
        AboutUs?: { variants?: { PetAboutUs2?: AboutUsData } };
        WhyChooseUs?: { variants?: { PetWhyChooseUs2?: WhyChooseUsData } };
        Team?: { variants?: { PetTeam2?: TeamData } };
        Gallery?: { variants?: { PetGallery2?: GalleryData } };
        Testimonials?: { variants?: { PetTestimonials2?: TestimonialsData } };
        Faq?: { variants?: { PetFaq2?: FaqData } };
        Contact?: { variants?: { PetContact2?: ContactData } };
      };
    };
  };
}
