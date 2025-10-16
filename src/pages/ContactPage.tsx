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
}

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
    <section className="contact-page w-full">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <header className="mb-10 text-center">
          <Heading as="h1" level="h1" align="center" className="text-4xl">
            Contacto
          </Heading>
          <Text align="center" className="text-neutral-300 mt-3">
            ¿Tienes dudas o propuestas? Escríbenos y te contactamos.
          </Text>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <article className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm">
            <Heading as="h2" level="h3" className="text-2xl mb-4">
              Información
            </Heading>
            <ul className="space-y-4 text-neutral-300">
              <li>
                <span className="block text-neutral-400">Email</span>
                <a
                  href="mailto:hola@matchday.app"
                  className="text-emerald-400 hover:underline"
                >
                  hola@matchday.app
                </a>
              </li>
              <li>
                <span className="block text-neutral-400">Soporte</span>
                <a
                  href="mailto:soporte@matchday.app"
                  className="text-emerald-400 hover:underline"
                >
                  soporte@matchday.app
                </a>
              </li>
              <li>
                <span className="block text-neutral-400">Horario</span>
                <p>Lun - Vie, 9:00 - 18:00 CET</p>
              </li>
            </ul>
            <div className="mt-6 text-sm text-neutral-400">
              También puedes consultar nuestro Centro de Ayuda o seguirnos en
              redes para novedades.
            </div>
          </article>

          {/* Formulario */}
          <article className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm">
            <Heading as="h2" level="h3" className="text-2xl mb-4">
              Envíanos un mensaje
            </Heading>
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  required
                  className={`w-full rounded-md bg-neutral-800 border px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500 ${
                    errors.name ? "border-red-500" : "border-neutral-700"
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className={`w-full rounded-md bg-neutral-800 border px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500 ${
                    errors.email ? "border-red-500" : "border-neutral-700"
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block mb-1 text-sm">
                  Asunto (opcional)
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={onChange}
                  className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500"
                  placeholder="Motivo del mensaje"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-sm">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={6}
                  className={`w-full resize-y rounded-md bg-neutral-800 border px-3 py-2 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500 ${
                    errors.message ? "border-red-500" : "border-neutral-700"
                  }`}
                  placeholder="Cuéntanos en qué podemos ayudarte"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="default"
                  disabled={submitting}
                  className="w-full"
                >
                  {submitting ? "Enviando…" : "Enviar mensaje"}
                </Button>
              </div>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
