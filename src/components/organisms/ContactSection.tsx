import type { FC, ReactNode } from "react";
import { Heading, Text } from "@/components";
import { Button } from "@/components/atoms";

export interface ContactSectionProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  highlights?: string[];
  info?: {
    address?: string;
    phone?: string;
    email?: string;
  };
  mapImageUrl?: string;
  onSubmit?: (data: {
    name: string;
    email: string;
    message: string;
    consent: boolean;
  }) => Promise<void> | void;
  actionsSlot?: ReactNode; // por si se quiere inyectar CTA extra
}

const ContactSection: FC<ContactSectionProps> = ({
  id,
  className = "",
  title = "Contacta con nosotros",
  subtitle = "¿Listo para revolucionar tu experiencia futbolística?",
  description,
  highlights,
  info = {
    address: "Calle Ejemplo 123, Madrid, España",
    phone: "+34 123 456 789",
    email: "hola@matchday.com",
  },
  mapImageUrl = "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
  onSubmit,
  actionsSlot,
}) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on",
    };
    await onSubmit(payload);
  };
  return (
    <section id={id} className={`bg-white text-neutral-800 ${className}`}>
      <div className="max-w-6xl mx-auto flex flex-col">
        <header className="flex flex-col items-center gap-8 p-6">
          <Heading as="h2" level="h1" align="center" color="success">
            {title}
          </Heading>
          {subtitle && (
            <Text align="center" className="text-neutral-600">
              {subtitle}
            </Text>
          )}
          {description && (
            <Text align="center" className="text-neutral-700 mt-4">
              {description}
            </Text>
          )}
          {highlights && highlights.length > 0 && (
            <ul className="max-w-96">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Columna izquierda: formulario */}
          <article className="order-1 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm text-neutral-700"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md bg-white border border-neutral-300 px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm text-neutral-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md bg-white border border-neutral-300 px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm text-neutral-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-y rounded-md bg-white border border-neutral-300 px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="consent" className="text-sm text-neutral-600">
                  Acepto recibir comunicaciones comerciales
                </label>
              </div>

              {actionsSlot}

              <div className="pt-1">
                <Button
                  type="submit"
                  variant="success"
                  size="default"
                  className="w-full"
                >
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </article>

          {/* Columna derecha: tarjeta de información + mapa */}
          <div className="order-2 flex flex-col gap-6">
            <article className="rounded-2xl bg-[#00BC7D]  p-6 shadow-sm">
              <Heading as="h3" level="h3" className="p-0 pb-2" color="white">
                Información de Contacto
              </Heading>
              <ul className="space-y-4 text-stone-50">
                {info.address && (
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm opacity-90">{info.address}</p>
                  </li>
                )}
                {info.phone && (
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                    </svg>
                    <p className="text-sm opacity-90">{info.phone}</p>
                  </li>
                )}
                {info.email && (
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M2.01 6.03A2 2 0 014 4h16a2 2 0 011.99 2.03L12 12.99 2.01 6.03z" />
                      <path d="M22 8.25l-10 6-10-6V18a2 2 0 002 2h16a2 2 0 002-2V8.25z" />
                    </svg>
                    <a
                      href={`mailto:${info.email}`}
                      className="text-sm underline-offset-2 hover:underline"
                    >
                      {info.email}
                    </a>
                  </li>
                )}
              </ul>
            </article>
            <article className="rounded-2xl overflow-hidden shadow-sm border border-neutral-200">
              <img
                src={mapImageUrl}
                alt="Mapa de nuestra ubicación"
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
                loading="lazy"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
