import { STRAPI_ENDPOINT } from "@/helpers/endpoints";
import Image from "next/image";
import { TeacherAboutProps } from "./types";

import ReactMarkdown from "react-markdown";
import { Achievement } from "./components/Achievement";

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

      <div className="mt-[50px]  border-[3px] rounded-[50px] border-primary-2 flex ">
        <ReactMarkdown className="py-[50px] px-[60px] text-[20px]">
          {description}
        </ReactMarkdown>
        <Image
          className="w-[400px] h-full"
          src={avatarURL}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={avatarBlurURL}
          alt={avatar.alternativeText}
        />
      </div>

      {achievements.length ? (
        <div className="mt-[100px]">
          <h3 className="font-black text-[80px] text-primary-1 uppercase drop-shadow-text">
            Достижения
          </h3>
          <ul className="mt-[100px]">
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
