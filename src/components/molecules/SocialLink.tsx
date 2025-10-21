import { Link } from "react-router";
import iconFacebook from "@/assets/images/svg/social/facebook.svg";
import iconInstagram from "@/assets/images/svg/social/instagram.svg";
import iconLinkedIn from "@/assets/images/svg/social/linkedin.svg";
import iconTwitter from "@/assets/images/svg/social/twitter-o-x.svg";
import type { FC } from "react";

const SocialLink: FC<{ platform: string; url: string }> = ({
  platform,
  url,
}) => {
  const icons: Record<string, string> = {
    facebook: iconFacebook,
    twitter: iconTwitter,
    instagram: iconInstagram,
    linkedin: iconLinkedIn,
  };
  return (
    <Link
      title={platform}
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform}
    >
      <img src={icons[platform]} alt={platform} className="h-full w-full" />
    </Link>
  );
};
export default SocialLink;
