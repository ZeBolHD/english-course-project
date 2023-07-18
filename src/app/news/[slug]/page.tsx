import { getArticleDataBySlug, getNewsPageData } from "@/helpers/api";
import { ArticleAbout } from "@/modules/ArticleAbout";
import { ParamsProps } from "@/modules/types";
import { notFound } from "next/navigation";
import React from "react";

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
