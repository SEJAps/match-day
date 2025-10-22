import { Button, Heading, Text } from "@/components";
import type { FC, ReactNode } from "react";
import { cn } from "@/utils/cn";

export type PlanCardFeature = {
  label: string;
  value: ReactNode;
  group?: boolean;
};

export type PlanCardProps = {
  title: string;
  price: string;
  description?: string;
  cta?: { label: string; variant?: "success" | "view"; fullWidth?: boolean };
  features?: PlanCardFeature[];
  className?: string;
};

const PlanCard: FC<PlanCardProps> = ({
  title,
  price,
  description,
  cta,
  features = [],
  className,
}) => {
  return (
    <article
      className={cn(
        "rounded-lg border border-gray-300/40 bg-transparent p-4 text-white",
        className
      )}
    >
      <header className="flex flex-col items-start gap-1 mb-3">
        <Heading
          as="h3"
          level="h4"
          color="white"
          className="text-2xl font-semibold"
        >
          {title}
        </Heading>
        <Text color="white" className="text-lg opacity-80">
          {price}
        </Text>
        {description ? (
          <Text color="white" className="text-sm opacity-80">
            {description}
          </Text>
        ) : null}
      </header>
      {features?.length ? (
        <ul className="divide-y divide-gray-300/30">
          {features.map((f, i) =>
            f.group ? (
              <li key={i} className="pt-4 pb-2">
                <span className="text-xs uppercase tracking-wide text-white/70">
                  {f.label}
                </span>
              </li>
            ) : (
              <li
                key={i}
                className="py-3 grid grid-cols-[1fr_auto] items-center gap-4"
              >
                <span className="text-sm break-words">{f.label}</span>
                <span className="text-sm font-semibold justify-self-end">
                  {f.value}
                </span>
              </li>
            )
          )}
        </ul>
      ) : null}
      {cta ? (
        <footer className="mt-4 w-full">
          <Button
            variant={cta.variant ?? "success"}
            className={cn({ "w-full": cta.fullWidth })}
          >
            <small>{cta.label}</small>
          </Button>
        </footer>
      ) : null}
    </article>
  );
};

export default PlanCard;
