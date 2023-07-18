import { getNewsPageDataByPageAndCount } from "@/helpers/api";
import { News } from "@/modules/NewsPage";
import { NewsParamsProps } from "@/modules/types";
import { notFound } from "next/navigation";

const NewsPage = async ({ searchParams }: NewsParamsProps) => {
  const pageNumber = searchParams.page;

  const newsData = await getNewsPageDataByPageAndCount(pageNumber);

  if (!newsData) {
    notFound();
  }

  return <News news={newsData.news} pagination={newsData.pagination} />;
};

export default NewsPage;
