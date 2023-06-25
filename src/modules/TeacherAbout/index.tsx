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
  const avatarURL = STRAPI_ENDPOINT + avatar.sizes.large;
  const avatarBlurURL = STRAPI_ENDPOINT + avatar.sizes.small;

  return (
    <div className="mt-[100px]">
      <h2 className="font-black text-[80px] text-primary-3 uppercase drop-shadow-text">
        {name}
      </h2>

      <div className="mt-[50px] h-min-[500px] border-[3px] rounded-[50px] border-primary-2 flex  justify-between">
        <ReactMarkdown
          className={`py-[50px] px-[60px] w-fit text-[20px] ${styles.markdown}`}
        >
          {description}
        </ReactMarkdown>

        <div className="w-[500px]">
          <Image
            className="w-[500px] h-full"
            src={avatarURL}
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={avatarBlurURL}
            alt={avatar.alternativeText}
          />
        </div>
      </div>

      {achievements.length ? (
        <div className="mt-[100px]">
          <h3 className="font-black text-[80px] text-primary-1 uppercase drop-shadow-text">
            Достижения
          </h3>
          <ul className="grid grid-cols-3 gap-x-[50px] gap-y-[100px] gap- mt-[100px] justify-between w-full">
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
