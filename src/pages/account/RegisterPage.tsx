import { Button, Heading, Text } from "@/components";
import { Container } from "@/components/atoms/Container";
import { Row } from "@/components/molecules/Row";
import { RowsContent } from "@/components/organisms/RowsContent";
import { NavLink } from "react-router";

const RegisterPage: React.FC = () => {
  return (
    <Container fullWidth bgColor="bg-pink-600">
      <RowsContent>
        <Row>
          <section className="flex flex-col justify-center w-full py-12 px-6">
            <header className="flex flex-col not-first:mb-6">
              <Heading>Register</Heading>
              <Text>Create a new account</Text>
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
            <footer>
              <Text align="center" size="sm" className="text-neutral-700">
                Forgot your password?{" "}
                <NavLink to="/account/login" className="text-success underline">
                  You have an account? Login here.
                </NavLink>
              </Text>
              <Text align="center" size="sm" className="text-neutral-700">
                Don't have an account?{" "}
                <NavLink
                  to="/account/recover"
                  className="text-success underline"
                >
                  Recover it here.
                </NavLink>
              </Text>
            </footer>
          </section>
        </Row>
      </RowsContent>
    </Container>
  );
};

export default RegisterPage;
