import { STRAPI_ENDPOINT } from "@/helpers/endpoints";
import Image from "next/image";
import React from "react";
import { AchievementProps } from "../types";

export const Achievement = ({ name, image }: AchievementProps) => {
  const imageMediumURL = STRAPI_ENDPOINT + image.sizes.medium;

  return (
    <li>
      <h5 className="text-[20px]">{name}</h5>
      <Image
        className="w-[350px] h-[500px] mt-[25px]"
        src={imageMediumURL}
        width={350}
        height={500}
        alt={image.alternativeText}
      />
    </li>
  );
};
