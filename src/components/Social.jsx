import React from "react";
import FlipLink from "./FlipLink";
import GitHubIcon from "./utils/GitHubIcon";
import LinkedinIcon from "./utils/LinkedinIcon";
import YouTubeIcon from "./utils/YouTubeIcon";

const Social = () => {
  const iconsClass = "transition ease-in-out group-hover:fill-black fill-current dark:fill-stone-200 size-6 mix-blend-multiply"

  return (
    <div className="flex flex-row justify-center gap-2 md:gap-4 items-center">
      <div className="flex space-x-4 md:px-4">
        <div className="hidden md:block h-full mt-2 md:mt-0">
          <div className="flex flex-row items-center gap-2">
            <FlipLink href="https://github.com/alibardide5124">GITHUB</FlipLink>
            <FlipLink href="https://linkedin.com/in/alibardide">
              LINKEDIN
            </FlipLink>
            <FlipLink href="https://youtube.com/@AliBardide">YOUTUBE</FlipLink>
          </div>
        </div>
        <div className="md:hidden h-full flex flex-row items-center justify-center gap-2">
          <SocialMiniIcon href="https://github.com/alibardide-dev"><GitHubIcon className={iconsClass}/></SocialMiniIcon>
          <SocialMiniIcon href="https://linkedin.com/in/alibardide"><LinkedinIcon className={iconsClass} /></SocialMiniIcon>
          <SocialMiniIcon href="https://youtube.com/@PhoenixCodin"><YouTubeIcon className={iconsClass} /></SocialMiniIcon>
        </div>
      </div>
      <a
        href="https://docs.google.com/document/d/15210qMpNG37ifaj9IbWtX5IuEiGn5Me16_UWWAiFPBo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex text-sm transition ease-in-out rounded-md items-center justify-center py-2 px-4 font-bold text-primary-content border-2 border-primary hover:bg-primary cursor-pointer"
      >
        <p className="hidden md:block">My</p> Resume
      </a>
    </div>
  );
};

const SocialMiniIcon = ({ children, href }) => {
  return (
  <a href={href} target="_blank" rel="noopener noreferrer" 
  className="group transition ease-in-out rounded-md items-center justify-center p-1 border-2 border-white hover:bg-white cursor-pointer">
    {children}
    </a>
  );
};

export default Social;


