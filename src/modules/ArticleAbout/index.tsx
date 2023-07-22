import { STRAPI_ENDPOINT } from "@/helpers/endpoints";
import { ArticleProps } from "../NewsPage/types";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";

import styles from "@/components/Markdown.module.scss";

export const ArticleAbout = ({
  heading,
  image,
  description,
  createdAt,
}: ArticleProps) => {
  const imageURL = STRAPI_ENDPOINT + image?.url;

  const dayCreated = new Date(createdAt).getDate();
  const monthCreated = new Date(createdAt).getMonth();
  const yearCreated = new Date(createdAt).getFullYear();

  const dateCreated = dayCreated + "." + monthCreated + "." + yearCreated;

  return (
    <main className="mt-[100px] relative max-desktop:mt-[60px] max-mobile:mt-[40px]">
      <div className="flex w-full h-fit  max-tablet:flex-col-reverse">
        {image ? (
          <Image
            className="w-auto h-[400px] object-contain mr-[25px] rounded-[15px] max-laptop:h-[320px]
            max-tablet:w-fit max-tablet:m-auto max-tablet:h-fit max-tablet:mt-[20px]"
            src={imageURL}
            width={1000}
            height={1000}
            alt={image.alternativeText}
          />
        ) : null}

        <div className="h-full">
          <h1 className="text-[34px] font-semibold text-primary-2 max-desktop:text-[30px] max-laptop:text-[26px] max-mobile:text-[24px]">
            {heading}
          </h1>
          <div className="flex h-fit mt-[25px] items-center max-tablet:mt-[10px]">
            <Image
              className="w-[30px] h-[30px] max-tablet:w-[20px] max-tablet:h-[20px]"
              src="/assets/news/date.svg"
              width={30}
              height={30}
              alt="created"
            />
            <p className="text-[18px] ml-[15px] max-laptop:text-[16px] max-tablet:ml-[5px] max-mobile:text-[14px]">
              {dateCreated}
            </p>
          </div>
        </div>
      </div>
      <ReactMarkdown
        className={`text-[20px] mt-[50px] max-laptop:text-[16px] max-tablet:mt-[20px] ${styles.markdown}`}
      >
        {description}
      </ReactMarkdown>
    </main>
  );
};
