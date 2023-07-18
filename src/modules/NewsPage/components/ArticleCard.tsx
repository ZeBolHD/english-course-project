import { PageContainer } from "@/components/PageContainer";
import { STRAPI_ENDPOINT } from "@/helpers/endpoints";
import Image from "next/image";
import Link from "next/link";
import { ArticleProps } from "../types";

export const ArticleCard = ({
  heading,
  image,
  description,
  slug,
}: ArticleProps) => {
  const imageURL = STRAPI_ENDPOINT + image?.url;

  return (
    <li
      className="w-full h-[300px] border-[3px] border-primary-2 rounded-[50px] py-[40px] px-[50px] mt-[50px] first:mt-0
      text-[20px] flex items-center justify-between"
    >
      {image ? (
        <Image
          className="h-full w-full aspect-square object-cover mr-[40px] rounded-[25px]"
          src={imageURL}
          width={250}
          height={250}
          alt={image.alternativeText}
        />
      ) : null}
      <div className="text-[20px] h-full flex flex-col justify-between">
        <h2 className="font-normal">{heading}</h2>
        <p className="overflow-ellipsis line-clamp-3">{description}</p>
        <Link
          href={`/news/${slug}`}
          prefetch={false}
          className="text-primary-3 uppercase"
        >
          Читать далее
        </Link>
      </div>
    </li>
  );
};
