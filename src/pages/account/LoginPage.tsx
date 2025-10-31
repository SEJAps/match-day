import { Button, Text } from "@/components";
import { Container } from "@/components/atoms/Container";
import LogoIcon from "@/components/icons/LogoIcon";
import { Row } from "@/components/molecules/Row";
import { RowsContent } from "@/components/organisms/RowsContent";
import { NavLink } from "react-router";
import { useNotifications } from "@/hooks/useNotifications";
import Logo from "@/components/atoms/Logo";

const LoginPage: React.FC = () => {
  const { showSuccess, showError } = useNotifications();
  return (
    <Container fullWidth bgColor="bg-white">
      <RowsContent className="py-6">
        <Row>
          <section className="flex flex-col  px-6">
            <aside className="flex flex-col items-center justify-center gap-6">
              <LogoIcon
                width={156}
                height={156}
                liveColor="var(--color-liveColor)"
                liveTextColor="var(--color-live-text)"
                dayColor="black"
                matchColor="black"
                fieldLineColor="var(--color-fieldLine-logo)"
                bg="var(--color-bg-logo)"
                arrowColor="var(--color-arrow-logo)"
                barsColor="var(--color-bars-logo)"
                strokeMatchColor="black"
                strokeDayColor="black"
                stroke="var(--color-stroke-logo)"
                strokeArrow="var(--color-stroke-arrow-logo)"
                strokeWidth="var(--size-stroke-width-logo)"
              />
              <Text align={"center"} color={"dark"} size={"2xl"}>
                Crear una cuenta de usuario nueva
              </Text>
            </aside>

            <article className="flex flex-col items-center justify-center w-full px-6 gap-6">
              <span className="text-dark text-lg text-center">
                Introduce tu email para inscribirte en la aplicación
              </span>
              <form
                className="flex flex-col gap-4 w-full lg:max-w-md py-6"
                autoComplete="on"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const data = new FormData(form);
                  const email = String(data.get("email") ?? "").trim();
                  const password = String(data.get("password") ?? "");
                  const rePassword = String(data.get("rePassword") ?? "");
                  const acceptedTerms = data.get("accept") !== null;

                  if (!email) {
                    showError("Por favor, introduce tu email.");
                    return;
                  }

                  if (!password || !rePassword) {
                    showError("Por favor, repite tu contraseña.");
                    return;
                  }

                  if (password !== rePassword) {
                    showError("Las contraseñas no coinciden.");
                    return;
                  }

                  if (!acceptedTerms) {
                    showError("Debes aceptar los términos y condiciones.");
                    return;
                  }

                  // Notificación con email y breve instrucción
                  showSuccess(
                    <div className="flex flex-col items-center text-center">
                      <Logo
                        colorPreset="brandLight"
                        size={{ x: 96, y: 78 }}
                        className="mx-auto mb-2"
                      />
                      <span className="font-semibold">{email}</span>
                      <span className="text-sm opacity-90">
                        Sigue los siguientes pasos para completar tu registro:
                        revisa tu correo y verifica tu cuenta.
                      </span>
                    </div>,
                  );
                }}
              >
                <label htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Insert your email"
                    className="w-full text-dark px-4 py-2 border border-dark/20 rounded"
                  />
                </label>
                <label htmlFor="password">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Insert your password"
                    className="w-full text-dark px-4 py-2 border border-dark/20 rounded"
                  />
                </label>
                <label htmlFor="password">
                  <input
                    type="password"
                    name="rePassword"
                    id="rePassword"
                    placeholder="Repeat your password"
                    className="w-full text-dark px-4 py-2 border border-dark/20 rounded"
                  />
                </label>
                <label htmlFor="accept" className="flex items-center gap-2">
                  <input type="checkbox" name="accept" id="accept" />
                  <small className="text-dark/70">
                    I accept the terms and conditions
                  </small>
                </label>

                <footer className="w-full flex flex-col gap-6">
                  <Button type="submit" variant="success" className="w-full">
                    Continuar
                  </Button>
                  <section className="w-full flex flex-col items-start gap-8">
                    <article className="flex flex-col w-full rounded gap-2">
                      <Button variant="info">Sign In With Facebook</Button>
                      <Button variant="outline" className="text-dark">
                        Sign In With Google
                      </Button>
                      <Button variant="default">Sign In With Apple</Button>
                    </article>
                    <article className="flex flex-col items-center w-full gap-4">
                      <small className="text-center text-lg text-dark/70">
                        No olvides validar el email
                      </small>
                      <i className="text-center text-xs text-dark/60">
                        Si continuas con el registro, aceptas nuestros términos
                        de servicio y nuestra política de privacidad.
                      </i>
                      <p className="max-w-96 text-sm text-dark flex justify-between gap-6 w-full">
                        Forgot your password?
                        <NavLink
                          to="/account/recover"
                          className="text-success underline"
                        >
                          Recover it here.
                        </NavLink>
                      </p>
                    </article>
                  </section>
                </footer>
              </form>
            </article>
          </section>
        </Row>
      </RowsContent>
    </Container>
  );
};

export default LoginPage;
