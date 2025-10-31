import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

type Props = {
  whenSelectedPage?: () => void;
};

const Menu: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  const handlerOnClick = () => {
    // No hace nada por ahoraç
    if (typeof props.whenSelectedPage === "function") {
      props.whenSelectedPage();
    }
  };

  return (
    <>
      <NavLink
        to="/"
        onClick={handlerOnClick}
        className={({ isActive }) =>
          isActive
            ? "is-active text-xl font-semibold hover:opacity-80 transition-opacity"
            : "text-xl font-semibold hover:opacity-80 transition-opacity"
        }
      >
        {t("nav.home")}
      </NavLink>
      <NavLink
        to="/players"
        onClick={handlerOnClick}
        className={({ isActive }) =>
          isActive
            ? "is-active text-xl font-semibold hover:opacity-80 transition-opacity"
            : "text-xl font-semibold hover:opacity-80 transition-opacity"
        }
      >
        {t("nav.players")}
      </NavLink>
      <NavLink
        to="/teams"
        onClick={handlerOnClick}
        className={({ isActive }) =>
          isActive
            ? "is-active text-xl font-semibold hover:opacity-80 transition-opacity"
            : "text-xl font-semibold hover:opacity-80 transition-opacity"
        }
      >
        {t("nav.teams")}
      </NavLink>
      <NavLink
        to="/clubs"
        onClick={handlerOnClick}
        className={({ isActive }) =>
          isActive
            ? "is-active text-xl font-semibold hover:opacity-80 transition-opacity"
            : "text-xl font-semibold hover:opacity-80 transition-opacity"
        }
      >
        {t("nav.clubs")}
      </NavLink>
      <NavLink
        to="/contact"
        onClick={handlerOnClick}
        className={({ isActive }) =>
          isActive
            ? "is-active text-xl font-semibold hover:opacity-80 transition-opacity"
            : "text-xl font-semibold hover:opacity-80 transition-opacity"
        }
      >
        {t("nav.contact")}
      </NavLink>
    </>
  );
};

export default Menu;
