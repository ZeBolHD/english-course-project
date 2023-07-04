import { STRAPI_ENDPOINT } from "@/helpers/endpoints";
import { ImageApiProps } from "@/modules/types";
import Image from "next/image";

export const PhotoCard = ({ alternativeText, url }: ImageApiProps) => {
  const PhotoURL = STRAPI_ENDPOINT + url;

  return (
    <li className="h-fit text-center">
      <h4 className="text-[20px] max-laptop:text-[18px]">{alternativeText}</h4>
      <Image
        className="mt-[15px] object-cover rounded-[25px] h-full w-full aspect-square"
        src={PhotoURL}
        alt={alternativeText}
        width={1200}
        height={1000}
      />
    </li>
  );
};
