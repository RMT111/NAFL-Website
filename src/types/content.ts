/* ============================================================
   Content types — mirrors the JSON files in /content/.
   These will map to the TinaCMS schema later.
   ============================================================ */

export interface NavLink {
  href: string;
  label: string;
}

export interface Address {
  line1: string;
  line2: string;
  line3: string;
}

export interface SiteContent {
  companyName: string;
  phone: string;
  phoneHref: string;
  fax: string;
  email: string;
  emailHref: string;
  address: Address;
  badgeText: string;
  logo: string;
  logoAlt: string;
  footerLogo: string;
  footerDescription: string;
  navigation: NavLink[];
  footerNav: NavLink[];
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface FloorCard {
  heading: string;
  subheading: string;
  features: string[];
}

export interface HeroContent {
  eyebrow: string;
  introText: string;
  ctaPrimary: string;
  trustStats: TrustStat[];
  floorCard: FloorCard;
}

export interface WhyUsCard {
  icon: string;
  title: string;
  description: string;
}

export interface WhyUsContent {
  eyebrow: string;
  heading: string;
  description: string;
  cards: WhyUsCard[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  description: string;
  services: ServiceItem[];
}

export interface PartnersContent {
  heading: string;
  brands: string[];
}

export interface UseItem {
  icon: string;
  label: string;
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  uses: UseItem[];
  diagramCaption: string;
}

export interface CTAContent {
  heading: string;
  description: string;
  primaryButton: string;
  secondaryButtonPrefix: string;
}

export interface DataCentresContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  requirements: string[];
  panelHeading: string;
  panelDescription: string;
  panelFeatures: string[];
  panelCta: string;
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  introText: string;
  formHeading: string;
  formSubheading: string;
  formSuccessMessage: string;
  formNote: string;
  submitButton: string;
  serviceOptions: string[];
}
