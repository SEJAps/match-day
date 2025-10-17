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
