import { Button, Text } from "@/components";
import { Container } from "@/components/atoms/Container";
import LogoIcon from "@/components/icons/LogoIcon";
import { Row } from "@/components/molecules/Row";
import { RowsContent } from "@/components/organisms/RowsContent";
import { NavLink } from "react-router";
import RegistrationMethods from "@/components/molecules/RegistrationMethods";
import { useAccountPage } from "./useAccountPage";

const RegisterPage: React.FC = () => {
  const { handleRegisterSubmit } = useAccountPage();

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
                onSubmit={handleRegisterSubmit}
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
                    <RegistrationMethods />
                    <article className="flex flex-col items-center w-full gap-4">
                      <small className="text-center text-lg text-dark/70">
                        No olvides validar el email
                      </small>
                      <i className="text-center text-xs text-dark/60">
                        Si continuas con el registro, aceptas nuestros términos
                        de servicio y nuestra política de privacidad.
                      </i>
                      <p className="max-w-96 text-sm text-dark flex justify-between gap-6 w-full">
                        Ya tienes una cuenta?
                        <NavLink
                          to="/account/login"
                          className="text-success underline"
                        >
                          Iniciar sesión aquí.
                        </NavLink>
                      </p>
                      <p className="max-w-96 text-sm text-dark flex justify-between gap-6 w-full">
                        Olvide mi contraseña.
                        <NavLink
                          to="/account/recover"
                          className="text-success underline"
                        >
                          Haz clic aquí.
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

export default RegisterPage;
