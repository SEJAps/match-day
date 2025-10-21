import type { FC } from "react";
import SocialLink from "../molecules/SocialLink";

type SocialNetworksProps = {
  socialNetworks: { platform: string; url: string }[];
};

const SocialNetworks: FC<SocialNetworksProps> = ({ socialNetworks }) => {
  return (
    <>
      {/* Columna 4: Redes sociales */}
      <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(1rem,.14fr))] gap-4">
        {socialNetworks.map(({ platform, url }) => (
          <SocialLink key={platform} platform={platform} url={url} />
        ))}
      </div>
    </>
  );
};
export default SocialNetworks;
