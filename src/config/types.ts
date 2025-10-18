export type HeroBg = {
  src: string;
  width: number;
  height: number;
  alt: string;
  fit?: "cover" | "contain";
  loading?: "eager" | "lazy";
};

export type HeroSection = {
  title: string;
  subtitle?: string;
  description: string;
  image?: {
    width?: number;
    height?: number;
    src: string;
    alt?: string;
  };
  list?: {
    title: string;
    items: {
      icon: string;
      text: string;
    }[];
  };
};

export type ContactInfo = {
  address: string;
  phone: string;
  email: string;
};

export type ContactSectionConfig = {
  title: string;
  subtitle: string;
  info: ContactInfo;
  mapImageUrl: string;
  description?: string;
  highlights?: string[];
};

// Tipos genéricos para páginas estáticas (sin hero)
export type TextSection = {
  title?: string;
  description?: string;
  paragraphs?: string[];
};

export type ListItem = {
  icon?: string;
  text: string;
};

export type FeatureGroup = {
  title: string;
  items: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HelpCenterConfig = {
  intro?: TextSection;
  categories: {
    title: string;
    articles: { title: string; href: string }[];
  }[];
  faqs?: FaqItem[];
};

export type PricingTier = {
  name: string;
  monthlyPrice: number | "Free";
  description?: string;
  features: string[];
  ctaLabel?: string;
  mostPopular?: boolean;
};

export type PricingConfig = {
  intro: TextSection;
  tiers: PricingTier[];
  notes?: string[];
};

export type LegalSection = {
  heading: string;
  content: string[];
};

export type LegalPageConfig = {
  updatedAt: string; // ISO date string
  sections: LegalSection[];
};

export type BlogPostMeta = {
  title: string;
  excerpt: string;
  href: string;
  tag?: string;
  date?: string; // ISO date
};

export type BlogConfig = {
  intro: TextSection;
  featuredPosts: BlogPostMeta[];
  categories?: {
    title: string;
    labels: string[];
  };
};

export type FeaturesConfig = {
  intro: TextSection;
  groups: FeatureGroup[];
};

export type NotFoundConfig = {
  code: string; // e.g., "404"
  message: string;
  ctaLabel: string;
  ctaHref: string;
};

export type ServicesStaticConfig = {
  intro: TextSection;
  note?: string;
};
