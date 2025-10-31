import { Button, Text } from "@/components";
import { Container } from "@/components/atoms/Container";
import LogoIcon from "@/components/icons/LogoIcon";
import { Row } from "@/components/molecules/Row";
import { RowsContent } from "@/components/organisms/RowsContent";
import { Link, NavLink } from "react-router";

const LoginPage: React.FC = () => {
  return (
    <Container fullWidth bgColor="bg-white">
      <RowsContent className="py-6">
        <Row>
          <section className="flex flex-col  px-6">
            <aside className="flex flex-col items-center justify-center">
              <LogoIcon
                width={256}
                height={256}
                liveColor="var(--color-liveColor)"
                liveTextColor="var(--color-live-text)"
                dayColor="var(--color-dark)"
                matchColor="var(--color-dark)"
                fieldLineColor="var(--color-fieldLine-logo)"
                bg="var(--color-bg-logo)"
                arrowColor="var(--color-arrow-logo)"
                barsColor="var(--color-bars-logo)"
                strokeMatchColor="var(--color-strokeMatchColor-logo)"
                strokeDayColor="var(--color-strokeDayColor-logo)"
                stroke="var(--color-stroke-logo)"
                strokeArrow="var(--color-stroke-arrow-logo)"
                strokeWidth="var(--size-stroke-width-logo)"
              />
              <Text align={"center"} color={"dark"} size={"2xl"}>
                Crear una cuenta de usuario nueva
              </Text>
            </aside>

            <article className="flex flex-col items-center justify-center w-full px-6">
              <span className="text-dark text-xl text-center">
                Introduce tu email para inscribirte en la aplicación
              </span>
              <form
                className="flex flex-col gap-4 max-w-md"
                autoComplete="on"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor="email">
                  <small>Your email address</small>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Insert your email"
                    className="w-full bg-amber-100 text-neutral-600 px-4 py-2 rounded"
                  />
                </label>
                <label htmlFor="password">
                  <small>Your password</small>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Insert your password"
                    className="w-full bg-amber-100 text-neutral-600 px-4 py-2 rounded"
                  />
                </label>

                <label htmlFor="accept" className="flex items-center gap-2">
                  <input type="checkbox" name="accept" id="accept" />
                  <small>I accept the terms and conditions</small>
                </label>

                <footer className="flex justify-end">
                  <Button variant="success">Register</Button>
                </footer>
              </form>
            </article>
            <footer className="flex-1 flex flex-col items-center justify-center space-y-2">
              <section className="w-full max-w-sm mx-auto flex flex-col items-start space-y-2">
                <article className="flex gap-2">
                  <strong className="text-dark">Forgot your password?</strong>
                  <Link
                    to="/account/recover"
                    className="text-success underline"
                  >
                    Recover it here.
                  </Link>
                </article>
                <article className="flex gap-2">
                  <strong className="text-dark">Don't have an account? </strong>
                  <NavLink
                    to="/account/register"
                    className="text-success underline"
                  >
                    Register here.
                  </NavLink>
                </article>
              </section>
            </footer>
          </section>
        </Row>
      </RowsContent>
    </Container>
  );
};

export default LoginPage;
