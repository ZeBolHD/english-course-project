import { PageContainer } from "@/components/PageContainer";
import { STRAPI_ENDPOINT } from "@/helpers/endpoints";
import { ArticleProps } from "../NewsPage/types";
import Image from "next/image";

export const ArticleAbout = ({
  heading,
  image,
  description,
  slug,
}: ArticleProps) => {
  const imageURL = STRAPI_ENDPOINT + image?.url;

  return (
    <PageContainer
      title={heading}
      isInnerPage
      innerPageTitleColor="text-primary-3"
    >
      <p>{description}</p>

      {image ? (
        <Image
          src={imageURL}
          width={300}
          height={300}
          alt={image.alternativeText}
        />
      ) : null}
    </PageContainer>
  );
};
