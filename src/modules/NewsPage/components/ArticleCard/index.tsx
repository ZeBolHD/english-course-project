import { STRAPI_ENDPOINT } from "@/helpers/endpoints";
import { ArticleProps } from "@/modules/NewsPage/types";

import Image from "next/image";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import styles from "./Markdown.module.scss";

export const ArticleCard = ({
  heading,
  image,
  description,
  slug,
}: ArticleProps) => {
  const imageURL = STRAPI_ENDPOINT + image?.url;

  return (
    <li
      className="w-full h-[300px] border-[3px] border-primary-2 rounded-[50px] py-[35px] px-[50px] mt-[50px] first:mt-0
      text-[20px] flex items-center  max-laptop:px-[35px] max-tablet:h-fit max-tablet:flex-col max-tablet:p-[30px]"
    >
      {image ? (
        <Image
          className="h-[225px] w-[225px] aspect-square block object-cover mr-[40px] max-tablet:h-full max-laptop:mr-[25px] 
          rounded-[25px] max-tablet:w-[60%] max-tablet:m-auto max-tablet:mb-[40px]"
          src={imageURL}
          width={400}
          height={400}
          alt={image.alternativeText}
        />
      ) : null}
      <div className="text-[20px] h-full flex flex-col justify-between max-tablet:w-full  max-tablet:text-[16px]">
        <h2 className="font-normal">{heading}</h2>
        <ReactMarkdown
          className={`overflow-ellipsis line-clamp-3 max-tablet:mt-[30px] max-tablet:line-clamp-2 block
        ${styles.markdown}`}
        >
          {description}
        </ReactMarkdown>
        <Link
          href={`/news/${slug}`}
          prefetch={false}
          className="text-primary-3 uppercase max-tablet:mt-[30px]"
        >
          Читать далее
        </Link>
      </div>
    </li>
  );
};
