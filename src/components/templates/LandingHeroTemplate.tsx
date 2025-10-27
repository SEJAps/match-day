import type { FC, ReactNode } from "react";
import { Heading, Picture } from "@/components";
import { Button } from "@/components/atoms";

type CTA = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "outline";
};

export interface LandingHeroTemplateProps {
  images: Parameters<typeof Picture>[0]["images"];
  title: ReactNode;
  description?: ReactNode;
  ctas?: CTA[];
  heroContent?: ReactNode;
  overlay?: ReactNode;
  className?: string;
  pictureClassName?: string;
  heightClassName?: string; // altura del hero; por defecto 100svh móvil, screen en md+
  contentClassName?: string; // clases extra para el contenedor del contenido
}

const LandingHeroTemplate: FC<LandingHeroTemplateProps> = ({
  images,
  title,
  description,
  ctas = [],
  heroContent,
  overlay,
  className,
  pictureClassName,
  heightClassName = "min-h-[100svh] md:min-h-screen",
  contentClassName,
}) => {
  return (
    <section
      className={
        "container mx-auto" + heightClassName + " " + (className ?? "")
      }
    >
      <Picture
        absolute
        images={images}
        className={pictureClassName ?? "absolute inset-0 z-0 w-full h-full"}
        overlay={overlay}
      />

      <aside className="w-full h-full bg-transparent">
        <div
          className={
            "relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 h-full grid place-items-center " +
            (contentClassName ?? "")
          }
        >
          <article className="flex flex-col items-center justify-center py-8 sm:py-10">
            <Heading
              as="h1"
              level="h1"
              align="center"
              className="text-white text-4xl px-6 sm:text-6xl w-full max-w-6xl"
            >
              {title}
            </Heading>
            {description && (
              <p className="text-white text-[19.88px] w-full max-w-2xl text-center mt-8 px-4">
                {description}
              </p>
            )}
            {ctas.length > 0 && (
              <footer className="flex items-center gap-4 mt-12 order-1">
                {ctas.map((cta, idx) =>
                  cta.href ? (
                    <a key={idx} href={cta.href}>
                      <Button variant={cta.variant ?? "success"}>
                        {cta.label}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      key={idx}
                      variant={cta.variant ?? "success"}
                      onClick={cta.onClick}
                    >
                      {cta.label}
                    </Button>
                  ),
                )}
              </footer>
            )}
            {heroContent}
          </article>
        </div>
      </aside>
    </section>
  );
};

export default LandingHeroTemplate;
