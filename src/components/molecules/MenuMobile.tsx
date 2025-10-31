import Menu from "../atoms/Menu";
type Props = {
  whenSelectedPage?: () => void;
};
const MenuMobile: React.FC<Props> = (props) => {
  return (
    <nav className="flex flex-col gap-5 text-2xl text-dark">
      <Menu whenSelectedPage={props.whenSelectedPage} />
    </nav>
  );
};

export default MenuMobile;
