import { Button, Text } from "@/components";
import { Container } from "@/components/atoms/Container";
import LogoIcon from "@/components/icons/LogoIcon";
import { Row } from "@/components/molecules/Row";
import { RowsContent } from "@/components/organisms/RowsContent";
import { NavLink } from "react-router";
import RegistrationMethods from "@/components/molecules/RegistrationMethods";
import { useAccountPage } from "./useAccountPage";
import SoccerFieldIcon from "@/components/icons/SoccerFieldIcon";

const LoginPage: React.FC = () => {
  const { handleSubmit } = useAccountPage();

  return (
    <Container fullWidth bgColor="bg-white">
      <RowsContent className="py-6 relative">
        <Row>
          <section className="flex flex-col px-6">
            <SoccerFieldIcon className="absolute -top-26 right-6  scale-145 lg:top-8 lg:-left-18 lg:scale-175" />
            <aside className="flex flex-col items-center justify-center gap-6 z-10">
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
                Accede a tu cuenta de usuario
              </Text>
            </aside>

            <article className="flex flex-col items-center justify-center w-full px-6 gap-6 z-10">
              <span className="text-dark text-lg text-center">
                Introduce tu email para iniciar sesión en la aplicación
              </span>
              <form
                className="flex flex-col gap-4 w-full lg:max-w-md py-6"
                autoComplete="on"
                onSubmit={handleSubmit}
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

                <footer className="w-full flex flex-col gap-6">
                  <Button type="submit" variant="success" className="w-full">
                    Continuar
                  </Button>
                  <section className="w-full flex flex-col items-start gap-8">
                    <RegistrationMethods />
                    <article className="flex flex-col items-center w-full gap-4">
                      <p className="max-w-96 text-sm text-dark flex justify-between gap-6 w-full">
                        No tienes una cuenta?
                        <NavLink
                          to="/account/register"
                          className="text-success underline"
                        >
                          Regístrate aquí.
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

export default LoginPage;
