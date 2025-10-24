import type { FC } from "react";
import { Heading, Text } from "../atoms";
import { Button } from "../atoms";
import { Link } from "react-router";

export interface ServiceCardProps {
  title: string;
  text: string;
  icon: string;
  /** CTA opcional */
  ctaLabel?: string;
  ctaHref?: string;
  /**
   * Variante de layout: vertical (por defecto) u horizontal en desktop
   */
  variant?: "vertical" | "horizontal";
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  text,
  icon,
  ctaLabel,
  ctaHref,
  variant = "vertical",
}) => {
  return (
    <article
      className={
        variant === "horizontal"
          ? "h-full flex flex-col items-start gap-4 md:gap-6 rounded-2xl border border-success bg-success/80 p-6 md:p-7 lg:p-8 shadow-sm transition will-change-transform hover:shadow-md hover:-translate-y-0.5"
          : "h-full flex flex-col items-start rounded-2xl border border-success/40 bg-success/5 p-6 md:p-7 lg:p-8 shadow-sm transition will-change-transform hover:shadow-md hover:-translate-y-0.5"
      }
    >
      <img
        src={icon}
        alt={`Icono de ${title}`}
        className={
          variant === "horizontal"
            ? "w-14 h-14 md:w-16 md:h-16 mb-2 md:mb-0"
            : "w-14 h-14 md:w-16 md:h-16 mb-4"
        }
      />
      <div className="flex-1">
        <Heading
          as="h3"
          level="h4"
          className={
            variant === "horizontal"
              ? "text-white mb-3 sm:mb-4"
              : "text-accent mb-3 sm:mb-4"
          }
        >
          {title}
        </Heading>
        <Text className="text-white max-w-prose mb-3 sm:mb-4">{text}</Text>
        {ctaLabel && (
          <div>
            <Button
              asChild
              variant="primary"
              rightIcon={<span aria-hidden>→</span>}
            >
              <Link to={ctaHref ?? "#"}>{ctaLabel}</Link>
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};

export default ServiceCard;
