import type { FC } from "react";
import SocialNetworks from "../organisms/SociaNetworks";
import { useTranslation } from "react-i18next";

const SOCIAL_NETWORKS = [
  { platform: "facebook", url: "https://facebook.com" },
  { platform: "twitter", url: "https://twitter.com" },
  { platform: "instagram", url: "https://instagram.com" },
  { platform: "linkedin", url: "https://linkedin.com" },
];
const ViewSocialNetworks: FC = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h4 className="text-sm font-semibold">
        {t("footer.followUs", { defaultValue: "Síguenos" })}
      </h4>
      <SocialNetworks socialNetworks={SOCIAL_NETWORKS} />
    </section>
  );
};
export default ViewSocialNetworks;
