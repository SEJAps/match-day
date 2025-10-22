import { Button } from "@/components";
import type { FC, ReactNode } from "react";
import { cn } from "@/utils/cn";
import PlanCard from "@/components/molecules/PlanCard";

import type { PlanTier, PlanFeatureRow } from "@/types/plan";
import includedIcon from "@/assets/images/svg/included.svg";
import notIncludedIcon from "@/assets/images/svg/not-included.svg";
import { useTranslation } from "react-i18next";

export type PlanComparisonTableProps = {
  tiers: PlanTier[];
  features: PlanFeatureRow[];
  className?: string;
  clampLines?: number; // solo desktop para descripción
};

const PlanComparisonTable: FC<PlanComparisonTableProps> = ({
  tiers,
  features,
  className,
  clampLines = 2,
}) => {
  const { t } = useTranslation();
  const clampClasses = `md:[display:-webkit-box] md:[-webkit-line-clamp:${clampLines}] md:[-webkit-box-orient:vertical] md:overflow-hidden`;
  const renderValue = (value: string | undefined): ReactNode => {
    if (value == null) return "—";
    const v = String(value).trim().toLowerCase();
    if (["v", "✓", "si", "sí", "yes", "true"].includes(v))
      return (
        <img
          src={includedIcon}
          alt="Incluido"
          className="inline-block w-4 h-4 align-middle"
          loading="lazy"
        />
      );
    if (["x", "✕", "no", "false"].includes(v))
      return (
        <img
          src={notIncludedIcon}
          alt="No incluido"
          className="inline-block w-4 h-4 align-middle"
          loading="lazy"
        />
      );
    return value;
  };
  return (
    <div className={cn("max-w-7xl mx-auto px-4", className)}>
      {/* Tabla desktop */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full min-w-[720px] border-collapse text-white">
          <thead>
            <tr className="bg-transparent">
              <th className="text-left p-4 align-bottom">
                <span className="sr-only">
                  {t("pages.players.sections.subscriptionPlans.tableHeader", {
                    defaultValue: "Característica",
                  })}
                </span>
              </th>
              {tiers.map((tier) => (
                <th key={tier.id} className="p-4">
                  <div className="flex flex-col items-start text-left gap-2 max-w-[14rem] mx-auto">
                    <strong>
                      {t(
                        `pages.players.sections.subscriptionPlans.tiers.${tier.id}.title`,
                        { defaultValue: tier.title }
                      )}
                    </strong>
                    <small>
                      {t(
                        `pages.players.sections.subscriptionPlans.tiers.${tier.id}.price`,
                        { defaultValue: tier.price }
                      )}
                    </small>
                    {tier.description ? (
                      <small className={cn("opacity-80", clampClasses)}>
                        {t(
                          `pages.players.sections.subscriptionPlans.tiers.${tier.id}.description`,
                          { defaultValue: tier.description }
                        )}
                      </small>
                    ) : null}
                    {tier.cta ? (
                      <Button
                        className="w-full"
                        variant={tier.cta.variant ?? "success"}
                      >
                        <small>
                          {t(
                            `pages.players.sections.subscriptionPlans.tiers.${tier.id}.ctaLabel`,
                            { defaultValue: tier.cta.label }
                          )}
                        </small>
                      </Button>
                    ) : null}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((row, idx) => {
              if (row.group) {
                return (
                  <tr key={`g-${idx}`}>
                    <td
                      className="p-3 pt-6 pb-2 text-base font-semibold uppercase tracking-wide text-white/80 border-b border-gray-300/60"
                      colSpan={1 + tiers.length}
                    >
                      {t(
                        `pages.players.sections.subscriptionPlans.features.${idx}.label`,
                        { defaultValue: row.label }
                      )}
                    </td>
                  </tr>
                );
              }
              return (
                <tr
                  key={idx}
                  className={cn(
                    "border-b",
                    idx === features.length - 1
                      ? "border-transparent"
                      : "border-gray-300/40"
                  )}
                >
                  <td className="p-4">
                    {t(
                      `pages.players.sections.subscriptionPlans.features.${idx}.label`,
                      { defaultValue: row.label }
                    )}
                  </td>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="p-4 text-center">
                      {renderValue(row.values[tier.id])}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Móvil: tarjetas apiladas */}
      <div className="md:hidden grid gap-6">
        {tiers.map((tier) => (
          <PlanCard
            key={tier.id}
            title={tier.title}
            price={tier.price}
            description={tier.description}
            cta={{
              label: tier.cta?.label ?? "Empezar",
              variant: tier.cta?.variant ?? "success",
              fullWidth: true,
            }}
            features={features.map((row, idx) =>
              row.group
                ? {
                    label: t(
                      `pages.players.sections.subscriptionPlans.features.${idx}.label`,
                      { defaultValue: row.label }
                    ),
                    value: "",
                    group: true,
                  }
                : {
                    label: t(
                      `pages.players.sections.subscriptionPlans.features.${idx}.label`,
                      { defaultValue: row.label }
                    ),
                    value: renderValue(row.values[tier.id] ?? "—"),
                  }
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanComparisonTable;
