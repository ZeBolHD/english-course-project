import Link from "next/link";
import Image from "next/image";

import { STRAPI_ENDPOINT } from "@/helpers/endpoints";

import { Qualities } from "./Qualities";
import { TeacherMinProps } from "./types";

export const TeacherCard = ({
  id,
  name,
  avatar,
  slug,
  qualities,
}: TeacherMinProps) => {
  const imageURL = STRAPI_ENDPOINT + avatar.url;

  return (
    <li
      className="flex even:flex-row-reverse justify-between w-full h-[270px] mb-[65px] 
      max-desktop:block max-desktop:w-full max-desktop:px-[60px] max-desktop:py-[30px] 
      max-desktop:border-[3px] max-desktop:border-primary-2 max-desktop:h-fit max-desktop:rounded-[50px]
    "
    >
      <header className="hidden max-desktop:block text-center">
        <Link
          href={`/teachers/${slug}`}
          prefetch={false}
          className="text-[30px] text-primary-3 uppercase font-normal"
        >
          {name}
        </Link>
        <div className="w-full h-[3px] bg-primary-2 mt-[30px]" />
      </header>

      <div className="max-desktop:flex justify-between max-desktop:mt-[30px]">
        <div className="desktop:hidden w-[400px]">
          {qualities ? <Qualities items={qualities} /> : null}
        </div>

        <Image
          className="w-[270px] h-[270px] object-contain rounded-[50px]  border-[3px] border-primary-2
          max-desktop:border-none max-desktop:w-[350px] max-desktop:h-[350px]"
          src={imageURL}
          width={350}
          height={350}
          alt={avatar.alternativeText}
        />
      </div>

      <div className="py-[15px] px-[50px] w-[75%] border-[3px] border-primary-2 rounded-[50px] max-desktop:hidden">
        <div className="flex justify-between w-full  h-fit">
          <div className="w-fit  relative">
            <h3 className="font-normal py-[10px] uppercase text-[20px] w-fit text-center ">
              {name}
            </h3>
            <div className="w-[100%] h-[3px] absolute bg-primary-2 " />
          </div>
          <Link
            href={`/teachers/${slug}`}
            prefetch={false}
            className="px-[25px] flex items-center border-[3px] border-primary-3 text-primary-3 rounded-full uppercase"
          >
            Подробнее
          </Link>
        </div>
        {qualities ? <Qualities items={qualities} /> : null}
      </div>
    </li>
  );
};
