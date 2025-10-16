import type { FC } from "react";
import useNotifications from "@/hooks/useNotifications";
import ContactSection from "@/components/organisms/ContactSection";

// Página del contenedor: delega el contenido al organismo ContactSection

const ContactPage: FC = () => {
  const { showSuccess, showError } = useNotifications();
  // Estado local opcional (si en el futuro se quiere reflejar un spinner global)

  return (
    <ContactSection
      title="Contacta con nosotros"
      subtitle="¿Listo para revolucionar tu experiencia futbolística?"
      onSubmit={async () => {
        try {
          await new Promise((res) => setTimeout(res, 1000));
          showSuccess("Mensaje enviado. Te responderemos pronto ✉️");
        } catch {
          showError("No se pudo enviar el mensaje. Inténtalo más tarde");
        } finally {
          // noop
        }
      }}
    />
  );
};

export default ContactPage;
