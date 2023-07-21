import { PageContainer } from "@/components/PageContainer";
import { STRAPI_ENDPOINT } from "@/helpers/endpoints";
import { ArticleProps } from "../NewsPage/types";
import Image from "next/image";

export const ArticleAbout = ({
  heading,
  image,
  description,
  slug,
  createdAt,
}: ArticleProps) => {
  const imageURL = STRAPI_ENDPOINT + image?.url;

  const dateCreated = new Date(createdAt).toLocaleDateString();

  return (
    <main className="mt-[100px] relative max-desktop:mt-[60px] max-mobile:mt-[40px]">
      <div className="flex justify-between w-full h-fit">
        {image ? (
          <Image
            className="w-[50%] object-cover mr-[25px] rounded-[25px]"
            src={imageURL}
            width={600}
            height={600}
            alt={image.alternativeText}
          />
        ) : null}

        <div className="h-full">
          <h1 className="text-[34px] font-semibold text-primary-2 w-fit">
            {heading}
          </h1>
          <div className="flex h-fit mt-[25px]">
            <Image
              className="w-[30px] h-[30px]"
              src="/assets/news/time.svg"
              width={20}
              height={20}
              alt="created"
            />
            <p className="text-[20px] ml-[15px]">{dateCreated}</p>
          </div>
        </div>
      </div>
      <p className="text-[20px] mt-[50px]">{description}</p>
    </main>
  );
};
