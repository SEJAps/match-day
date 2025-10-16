export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface ContactSectionConfig {
  title: string;
  subtitle: string;
  info: ContactInfo;
  mapImageUrl: string;
}

export const CONTACT_SECTION_CONFIG: ContactSectionConfig = {
  title: "Contacta con nosotros",
  subtitle: "¿Listo para revolucionar tu experiencia futbolística?",
  info: {
    address: "Calle Ejemplo 123, Madrid, España",
    phone: "+34 123 456 789",
    email: "hola@matchday.com",
  },
  mapImageUrl:
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
};
