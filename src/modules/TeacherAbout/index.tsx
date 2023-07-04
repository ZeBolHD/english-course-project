import Image from "next/image";
import ReactMarkdown from "react-markdown";

import { Achievement } from "./components/Achievement";

import { TeacherAboutProps } from "./types";
import { STRAPI_ENDPOINT } from "@/helpers/endpoints";

import styles from "@/ui/Markdown.module.scss";

export const TeacherAbout = ({
  id,
  name,
  description,
  avatar,
  achievements,
}: TeacherAboutProps) => {
  const avatarURL = STRAPI_ENDPOINT + avatar.url;
  const avatarBlurURL = STRAPI_ENDPOINT + avatar.url;

  return (
    <div className="mt-[100px] relative max-desktop:mt-[60px]">
      <h2
        className="font-black text-[80px] text-primary-3 uppercase drop-shadow-text max-laptop:text-[60px]
      max-tablet:text-[30px]"
      >
        {name}
      </h2>

      <div
        className="w-full h-fit mt-[60px] py-[50px] px-[60px] rounded-[50px] border-[3px] border-primary-2 flex relative
      max-desktop:px-[60px] max-desktop:py-[30px] max-laptop:flex-col-reverse max-tablet:py-[20px] max-tablet:px-[40px] 
      max-mobile:px-[30px]"
      >
        <ReactMarkdown
          className={`w-[65%] text-[20px] max-laptop:m-auto max-laptop:text-[16px] 
          max-laptop:w-full max-laptop:mt-[15px]
          ${styles.markdown}`}
        >
          {description}
        </ReactMarkdown>

        <div
          className="h-full max-h-[500px] right-0 aspect-square absolute bottom-0 max-desktop:bottom-[30px]
          max-desktop:aspect-auto max-desktop:-right-[25px] max-desktop:w-fit max-desktop:h-full max-laptop:aspect-auto
          max-laptop:max-h-none max-laptop:h-[300px]  max-laptop:static max-laptop:w-full"
        >
          <Image
            className="h-full mb-0 mt-auto object-contain max-laptop:m-auto"
            src={avatarURL}
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={avatarBlurURL}
            alt={avatar.alternativeText}
          />

          <div className="hidden max-laptop:block h-[3px] bg-primary-2 w-full" />
        </div>
      </div>

      {achievements.length ? (
        <div className="mt-[120px] max-laptop:mt-[60px]">
          <h3
            className="font-black text-[80px] text-primary-1 uppercase drop-shadow-text 
          max-laptop:text-[60px] max-laptop:text-center max-tablet:text-[30px]"
          >
            Достижения
          </h3>
          <ul
            className="grid grid-cols-3 gap-[50px] mt-[100px] justify-between w-full max-laptop:mt-[60px] 
            max-tablet:mt-[60px] max-mobile:mt-[30px] max-laptop:text-[60px] max-tablet:grid-cols-2 max-tablet:gap-[25px] 
            max-mobile:grid-cols-1"
          >
            {achievements.map((item) => (
              <Achievement
                name={item.name}
                image={item.image}
                key={item.name}
              />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
