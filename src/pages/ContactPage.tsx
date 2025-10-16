import { useState } from "react";
import type { FC, FormEvent } from "react";
import { Heading, Text } from "@/components";
import { Button } from "@/components/atoms";
import useNotifications from "@/hooks/useNotifications";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent?: boolean;
}

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  consent: false,
};

const ContactPage: FC = () => {
  const { showSuccess, showError } = useNotifications();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (data: FormState) => {
    const nextErrors: Partial<FormState> = {};
    if (!data.name || data.name.trim().length < 2) {
      nextErrors.name = "Introduce tu nombre";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!data.email || !emailRegex.test(data.email)) {
      nextErrors.email = "Email inválido";
    }
    if (!data.message || data.message.trim().length < 10) {
      nextErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }
    return nextErrors;
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name } = target;
    let nextValue: string | boolean;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      nextValue = target.checked;
    } else {
      nextValue = target.value;
    }
    setForm((prev) => ({ ...prev, [name]: nextValue }) as FormState);
    // limpiar error de ese campo al escribir
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const valErrors = validate(form);
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      showError("Revisa los campos resaltados");
      return;
    }
    try {
      setSubmitting(true);
      // Simular envío (a integrar con backend o servicio de correo)
      await new Promise((res) => setTimeout(res, 1000));
      showSuccess("Mensaje enviado. Te responderemos pronto ✉️");
      setForm(initialState);
    } catch {
      showError("No se pudo enviar el mensaje. Inténtalo más tarde");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-page w-full bg-neutral-50 text-neutral-900">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <header className="mb-10 text-center">
          <Heading as="h1" level="h1" align="center" className="text-4xl">
            Contacta con nosotros
          </Heading>
          <Text align="center" className="text-neutral-600 mt-3">
            ¿Listo para revolucionar tu experiencia futbolística?
          </Text>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Columna izquierda: formulario */}
          <article className="order-1 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <form onSubmit={onSubmit} noValidate className="space-y-5">
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
                  value={form.name}
                  onChange={onChange}
                  required
                  className={`w-full rounded-md bg-white border px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500 ${
                    errors.name ? "border-red-500" : "border-neutral-300"
                  }`}
                  placeholder="Tu nombre completo"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
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
                  value={form.email}
                  onChange={onChange}
                  required
                  className={`w-full rounded-md bg-white border px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500 ${
                    errors.email ? "border-red-500" : "border-neutral-300"
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
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
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={6}
                  className={`w-full resize-y rounded-md bg-white border px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500 ${
                    errors.message ? "border-red-500" : "border-neutral-300"
                  }`}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={!!form.consent}
                  onChange={onChange}
                  className="mt-1 h-4 w-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="consent" className="text-sm text-neutral-600">
                  Acepto recibir comunicaciones comerciales
                </label>
              </div>

              <div className="pt-1">
                <Button
                  type="submit"
                  variant="primary"
                  size="default"
                  disabled={submitting}
                  className="w-full"
                >
                  {submitting ? "Enviando…" : "Enviar Mensaje"}
                </Button>
              </div>
            </form>
          </article>

          {/* Columna derecha: tarjeta de información + mapa */}
          <div className="order-2 flex flex-col gap-6">
            <article className="rounded-2xl bg-emerald-700 text-white p-6 shadow-sm">
              <Heading
                as="h2"
                level="h3"
                className="text-xl font-semibold mb-3"
              >
                Información de Contacto
              </Heading>
              <ul className="space-y-4">
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
                  <div>
                    <p className="text-sm opacity-90">
                      Calle Ejemplo 123, Madrid, España
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                  </svg>
                  <div>
                    <p className="text-sm opacity-90">+34 123 456 789</p>
                  </div>
                </li>
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
                  <div>
                    <a
                      href="mailto:hola@matchday.com"
                      className="text-sm underline-offset-2 hover:underline"
                    >
                      hola@matchday.com
                    </a>
                  </div>
                </li>
              </ul>
            </article>
            <article className="rounded-2xl overflow-hidden shadow-sm border border-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop"
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

export default ContactPage;
