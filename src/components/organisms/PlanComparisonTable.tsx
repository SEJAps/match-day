import { Button, Image } from "@/components";
import type { FC } from "react";
import { cn } from "@/utils/cn";
import PlanCard from "@/components/molecules/PlanCard";
import INCLUDED_ICON from "@/assets/images/svg/included.svg";
import NOT_INCLUDED_ICON from "@/assets/images/svg/not-included.svg";

import type { PlanTier, PlanFeatureRow } from "@/types/plan";

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
  const clampClasses = `md:[display:-webkit-box] md:[-webkit-line-clamp:${clampLines}] md:[-webkit-box-orient:vertical] md:overflow-hidden`;
  return (
    <div className={cn("max-w-7xl mx-auto px-4", className)}>
      {/* Tabla desktop */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full min-w-[720px] border-collapse text-white">
          <thead>
            <tr className="bg-transparent">
              <th className="text-left p-4 border-b border-gray-300/60 align-bottom">
                Perfil
              </th>
              {tiers.map((tier) => (
                <th key={tier.id} className="p-4 border-b border-gray-300/60">
                  <div className="flex flex-col items-start gap-2 max-w-xs">
                    <strong>{tier.title}</strong>
                    <small>{tier.price}</small>
                    {tier.description ? (
                      <small
                        className={cn("text-left opacity-80", clampClasses)}
                      >
                        {tier.description}
                      </small>
                    ) : null}
                    {tier.cta ? (
                      <Button variant={tier.cta.variant ?? "success"}>
                        <small>{tier.cta.label}</small>
                      </Button>
                    ) : null}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((row, idx) => (
              <tr
                key={idx}
                className={cn(
                  "border-b",
                  idx === features.length - 1
                    ? "border-transparent"
                    : "border-gray-300/40"
                )}
              >
                <td className="p-4">{row.label}</td>
                {tiers.map((tier) => {
                  const raw = row.values[tier.id];
                  const content =
                    typeof raw === "string" ? (
                      raw === "v" ? (
                        <Image
                          src={INCLUDED_ICON}
                          alt="Incluido"
                          className="inline-block w-5 h-5"
                          fit="contain"
                        />
                      ) : raw === "x" ? (
                        <Image
                          src={NOT_INCLUDED_ICON}
                          alt="No incluido"
                          className="inline-block w-5 h-5"
                          fit="contain"
                        />
                      ) : (
                        raw
                      )
                    ) : (
                      raw
                    );
                  return (
                    <td key={tier.id} className="p-4 text-center">
                      {content ?? "—"}
                    </td>
                  );
                })}
              </tr>
            ))}
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
            features={features.map((row) => {
              const raw = row.values[tier.id];
              const value =
                typeof raw === "string" ? (
                  raw === "v" ? (
                    <Image
                      src={INCLUDED_ICON}
                      alt="Incluido"
                      className="inline-block w-5 h-5"
                      fit="contain"
                    />
                  ) : raw === "x" ? (
                    <Image
                      src={NOT_INCLUDED_ICON}
                      alt="No incluido"
                      className="inline-block w-5 h-5"
                      fit="contain"
                    />
                  ) : (
                    raw
                  )
                ) : (
                  raw
                );
              return { label: row.label, value: value ?? "—" };
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanComparisonTable;
