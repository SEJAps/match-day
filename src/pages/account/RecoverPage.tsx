import { Text } from "@/components";
import { Container } from "@/components/atoms/Container";
import LogoIcon from "@/components/icons/LogoIcon";
import { Row } from "@/components/molecules/Row";
import { RowsContent } from "@/components/organisms/RowsContent";

const RecoverPage: React.FC = () => {
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
                Recuperar contraseña
              </Text>
            </aside>

            <article className="flex flex-col items-center justify-center w-full px-6 gap-6">
              <span className="text-dark text-lg text-center">
                Introduce tu email para recuperar tu contraseña
              </span>
              <form
                className="flex flex-col gap-4 w-full lg:max-w-md py-6"
                autoComplete="on"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-dark rounded-md p-2"
                />
                <button
                  type="submit"
                  className="bg-dark text-white rounded-md p-2"
                >
                  Enviar
                </button>
              </form>
            </article>
          </section>
        </Row>
      </RowsContent>
    </Container>
  );
};

export default RecoverPage;
