import { NavLink } from "react-router";
import logoSm from "@/assets/images/svg/logo-sm.svg";
import LogoIcon from "../icons/LogoIcon";

type Props = {
  width?: number | string;
  height?: number | string;
};

const CorporateLogo: React.FC<Props> = ({ width, height }) => {
  return (
    <>
      <section className="hidden sm:hidden md:hidden lg:hidden xl:flex xl:items-center xl:my-6 xl:ml-8 text-success gap-12">
        <LogoIcon
          width={width || 128}
          height={height || 128}
          liveColor="var(--color-liveColor)"
          liveTextColor="var(--color-live-text)"
          dayColor="var(--color-day-logo)"
          matchColor="var(--color-match-logo)"
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
        {/* <LogoIcon
            width={128}
            height={128}
            liveColor="var(--theme-dark-live-color)"
            liveTextColor="var(--theme-dark-live-text)"
            dayColor="var(--theme-dark-day-color)"
            matchColor="var(--theme-dark-match-color)"
            fieldLineColor="var(--theme-dark-fieldLine-color)"
            bg="var(--theme-dark-bg-logo)"
            arrowColor="var(--theme-dark-arrow-color)"
            barsColor="var(--theme-dark-bars-color)"
            strokeMatchColor="var(--theme-dark-stroke-match-color)"
            strokeDayColor="var(--theme-dark-stroke-day-color)"
            stroke="var(--theme-dark-stroke-color)"
            strokeArrow="var(--theme-dark-stroke-arrow-color)"
            strokeWidth="var(--size-stroke-width-logo)"
          /> */}
      </section>
      <section className="flex items-start my-8 pl-4 xl:hidden">
        <NavLink title="Match Day" to="/" aria-label="Match Day Logo">
          <div className="flex items-center gap-3">
            <img
              src={logoSm}
              alt="Match Day"
              width={width || 170}
              height={height || 41}
              className="h-10 w-auto"
            />
            <span className="sr-only">MATCH DAY</span>
          </div>
        </NavLink>
      </section>
    </>
  );
};

export default CorporateLogo;
