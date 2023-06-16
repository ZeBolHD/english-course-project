import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { STRAPI_ENDPOINT } from "@/helpers/endpoints";

import { TeacherMinProps } from "./types";
import { Qualities } from "./Qualities";

export const TeacherCard = ({
  id,
  name,
  avatar,
  slug,
  qualities,
}: TeacherMinProps) => {
  const imageURL = STRAPI_ENDPOINT + avatar.sizes.medium;

  return (
    <li className="flex even:flex-row-reverse justify-between w-full h-[270px] mb-[65px]">
      <Image
        className="w-[270px] h-[270px] object-contain rounded-[50px] border-[3px] border-primary-2"
        src={imageURL}
        width={270}
        height={270}
        alt={avatar.alternativeText}
        loading="lazy"
      />

      <div className="py-[15px] px-[50px] w-[75%] border-[3px] border-primary-2 rounded-[50px]">
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
