import { getArticleDataBySlug, getNewsPageData } from "@/helpers/api";
import { titleAddition } from "@/helpers/types";
import { ArticleAbout } from "@/modules/ArticleAbout";
import { ParamsProps } from "@/modules/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: ParamsProps): Promise<Metadata> => {
  const articleData = await getArticleDataBySlug(params.slug);

  if (!articleData) {
    notFound();
  }

  const date = new Date(articleData.createdAt).toLocaleDateString();

  return {
    title: articleData?.heading + titleAddition,
    description: articleData?.heading + " | " + date,
  };
};

const ArticlePage = async ({ params }: ParamsProps) => {
  const articleData = await getArticleDataBySlug(params.slug);

  if (!articleData) {
    notFound();
  }

  return <ArticleAbout {...articleData} />;
};

export const generateStaticParams = async () => {
  const data = await getNewsPageData();

  if (!data) {
    notFound();
  }

  const slugs = data.map((article) => {
    return {
      slug: article.slug,
    };
  });

  return slugs;
};

export const dynamic = "auto";

export default ArticlePage;
