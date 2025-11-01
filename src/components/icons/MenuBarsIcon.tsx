const MenuBarsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="var(--color-light)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MenuBarsIcon;
