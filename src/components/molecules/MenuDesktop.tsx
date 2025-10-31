import Menu from "../atoms/Menu";
// Componente de menú para escritorio (pantallas grandes)
type Props = {
  handleWhenSelectedPage?: () => void;
};
const MenuDesktop: React.FC<Props> = (props) => {
  return (
    <nav className="hidden md:flex md:items-center md:justify-center md:gap-4 md:h-full lg:min-h-18">
      <Menu whenSelectedPage={props.handleWhenSelectedPage} />
    </nav>
  );
};

export default MenuDesktop;
