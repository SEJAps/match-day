type CardProps = {
  children?: React.ReactNode;
  top?: React.ReactElement;
  bottom?: React.ReactElement;
};
const Card: React.FC<CardProps> = ({ top, bottom, children }) => {
  return (
    <>
      {top}
      {children}
      {bottom}
    </>
  );
};

export default Card;
