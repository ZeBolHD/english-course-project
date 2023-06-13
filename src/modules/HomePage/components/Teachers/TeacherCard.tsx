import Link from "next/link";
import Image from "next/image";
import { TeacherMinProps } from "./types";
import { STRAPI_ENDPOINT } from "@/helpers/endpoints";
import { Qualities } from "./Qualities";

export const TeacherCard = ({
  id,
  name,
  avatar,
  slug,
  qualities,
}: TeacherMinProps) => {
  const imageURL = STRAPI_ENDPOINT + avatar.sizes.medium;
  const imageBlurURL = STRAPI_ENDPOINT + avatar.sizes.small;

  return (
    <li className="flex even:flex-row-reverse justify-between w-full h-[270px] mb-[65px]">
      <Link href={`/teachers/${slug}`}>
        <Image
          className="w-[270px] h-full object-contain rounded-[50px] border-[3px] border-primary-2"
          src={imageURL}
          blurDataURL={imageBlurURL}
          width={270}
          height={270}
          alt={avatar.alternativeText}
          placeholder="blur"
          loading="lazy"
        />
      </Link>
      <div className="py-[15px] px-[50px] w-[75%] border-[3px] border-primary-2 rounded-[50px]">
        <h3 className="font-normal uppercase text-[20px] w-fit text-center">
          {name}
          <div className="w-[110%] h-[3px] mt-[10px] bg-primary-2 translate-x-[-5%]" />
        </h3>
        {qualities ? <Qualities items={qualities} /> : null}
      </div>
    </li>
  );
};
