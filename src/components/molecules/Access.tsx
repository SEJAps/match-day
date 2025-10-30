import { NavLink } from "react-router";
import { Button } from "../atoms";
import { useTranslation } from "react-i18next";

type Props = {
  label?: string;
};

const BtnAccess: React.FC<Props> = ({ label }: Props) => {
  const { t } = useTranslation();
  return (
    <NavLink to="/account">
      <Button variant="success" size="default">
        {label || t("common.signIn")}
      </Button>
    </NavLink>
  );
};

export default BtnAccess;
