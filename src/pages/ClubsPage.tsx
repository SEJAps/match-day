import type { FC } from "react";
import MainFooter from "../layouts/MainFooter";
import TopSection from "../layouts/TopSection";

const ClubsPage: FC = () => {
  return (
    <>
      <TopSection />
      <section className="clubs-page h-full">
        <article>
          <header>
            <h1>Clubs</h1>
          </header>
          <section>Clubs</section>
        </article>
      </section>
      <MainFooter />
    </>
  );
};

export default ClubsPage;
