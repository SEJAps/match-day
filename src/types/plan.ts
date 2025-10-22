export type PlanTier = {
  id: string;
  title: string;
  price: string; // e.g., "40€/año"
  description?: string;
  cta?: { label: string; variant?: "success" | "view" };
};

export type PlanFeatureRow = {
  label: string;
  values: Record<string, string>; // key por tier.id
};
