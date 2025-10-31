import Menu from "../atoms/Menu";
// Componente de menú para escritorio (pantallas grandes)
type Props = {
  handleWhenSelectedPage?: () => void;
};
const MenuDesktop: React.FC<Props> = (props) => {
  return (
    <nav className="hidden md:flex items-center justify-center gap-4 h-full lg:min-h-18">
      <Menu whenSelectedPage={props.handleWhenSelectedPage} />
    </nav>
  );
};

export default MenuDesktop;
