import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
const ClickableIcon = props => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon className={"w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
    </a>
  );
};
const IconsData = [
  { href: "https://github.com/drunkint", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/angusleehs/", Icon: LinkedinIcon },
  { href: "https://www.instagram.com/anguslee__/", Icon: InstagramIcon },
  // { href: "https://www.youtube.com/@abdellatif_anaflous", Icon: YoutubeIcon },
];

export default function Fotter(props: { githubUrl: string; hideSocialsInDesktop: boolean }) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div className={`flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {IconsData.map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />;
        })}
      </div>
      <a href={props.githubUrl} className="" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Modified from Anaflous Abdellatif&apos;s code
          </span>
        </div>
      </a>
      <a href={'https://github.com/drunkint/personal-website-2024'} className="" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Customized by Angus Lee
          </span>
        </div>
      </a>
    </div>
  );
}
