import { Fragment, type FC } from "react";
import { NavLink, Outlet } from "react-router";

const AtomicDesignLayout: FC = () => {
  return (
    <Fragment>
      <header className="flex items-center justify-center gap-8 bg-black p-4 sticky top-0 z-50">
        <NavLink to="/atomic-design" className="text-[#10B981] text-lg">
          Home
        </NavLink>
        <NavLink to="/atomic-design/toast" className="text-[#10B981] text-lg">
          Toast
        </NavLink>
        <NavLink to="/atomic-design/buttons" className="text-[#10B981] text-lg">
          Buttons
        </NavLink>
        <NavLink
          to="/atomic-design/logo-showcase"
          className="text-[#10B981] text-lg"
        >
          Logo Showcase
        </NavLink>
      </header>
      <main className="flex flex-col  overflow-x-hidden overflow-y-auto px-8 bg-neutral-900">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default AtomicDesignLayout;
