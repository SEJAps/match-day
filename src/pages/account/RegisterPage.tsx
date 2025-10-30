import { Button, Heading, Text } from "@/components";
import { Container } from "@/components/atoms/Container";
import { Row } from "@/components/molecules/Row";
import { RowsContent } from "@/components/organisms/RowsContent";
import { Link, NavLink } from "react-router";

const RegisterPage: React.FC = () => {
  return (
    <Container fullWidth bgColor="bg-white">
      <RowsContent>
        <Row>
          <section className="flex flex-col py-12 px-6">
            <header className="flex flex-col not-first:mb-6">
              <Heading align={"center"}>Register</Heading>
              <Text align={"center"}>Create a new account</Text>
            </header>
            <article className="flex justify-center w-full py-12 px-6">
              <form
                className="flex flex-col gap-4 "
                autoComplete="on"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor="username">
                  <small>Your username</small>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Insert your username"
                    className="w-full bg-amber-100 text-neutral-600 px-4 py-2 rounded"
                  />
                </label>
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
                <label htmlFor="repassword">
                  <small>Re-enter your password</small>
                  <input
                    type="repassword"
                    name="repassword"
                    id="repassword"
                    placeholder="Re-enter your password"
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
                  <strong className="text-dark">
                    You already have an account?
                  </strong>
                  <NavLink
                    to="/account/login"
                    className="text-success underline"
                  >
                    Login here.
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

export default RegisterPage;
