import { STRAPI_ENDPOINT } from "@/helpers/endpoints";
import Image from "next/image";
import React from "react";
import { AchievementProps } from "../types";

export const Achievement = ({ name, image }: AchievementProps) => {
  const imageMediumURL = STRAPI_ENDPOINT + image.url;

  return (
    <li className="h-full w-fit flex flex-col justify-between max-mobile:w-fit max-mobile:m-auto max-mobile: text-center">
      <h5 className="text-[20px] uppercase font-normal w-max-full max-laptop:text-[16px] max-tablet:text-[16px]">
        {name}
      </h5>
      <Image
        className="w-fit h-auto mt-0 m-auto"
        src={imageMediumURL}
        width={350}
        height={500}
        alt={image.alternativeText}
      />
    </li>
  );
};
