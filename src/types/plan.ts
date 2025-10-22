export type PlanTier = {
  id: string;
  title: string;
  price: string; // e.g., "40€/año"
  description?: string;
  cta?: { label: string; variant?: "success" | "view" };
};

import type { ReactNode } from "react";

export type PlanFeatureRow = {
  label: string;
  values: Record<string, ReactNode>; // key por tier.id
};
