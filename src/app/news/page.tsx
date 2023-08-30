import { getNewsPageDataByPageAndCount } from "@/helpers/api";
import { titleAddition } from "@/helpers/consts";
import { News } from "@/containers/NewsPage";
import { NewsParamsProps } from "@/containers/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Новости" + titleAddition,
  description: "Новости Центра языковой подготовки НХТИ",
};

const NewsPage = async ({ searchParams }: NewsParamsProps) => {
  const pageNumber = searchParams.page;

  const newsData = await getNewsPageDataByPageAndCount(pageNumber);

  if (!newsData) {
    notFound();
  }

  return <News news={newsData.news} pagination={newsData.pagination} />;
};

export default NewsPage;
