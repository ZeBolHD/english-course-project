import { PageContainer } from "@/components/PageContainer";
import Link from "next/link";

import { NewsPageProps } from "./types";
import { ArticleCard } from "./components/ArticleCard";

export const News = ({ news, pagination }: NewsPageProps) => {
  const pages = [...Array(pagination.pageCount)].map((_, index) => index + 1);

  return (
    <PageContainer title="Новости">
      <ul className="mt-[75px] max-desktop:mt-[60px] max-tablet:mt-[30px]">
        {news.map((article) => {
          return <ArticleCard {...article} key={article.slug} />;
        })}
      </ul>
      {pages.length > 1 ? (
        <ul className="flex mt-[40px]">
          {pages.map((pageNumber) => {
            return (
              <li
                key={pageNumber}
                className="ml-[25px] first:ml-0 max-tablet:ml-[15px]"
              >
                <Link
                  className={`text-[30px] flex items-center justify-center w-[45px] h-[45px] rounded-full
                bg-primary-2 max-tablet:w-[40px] max-tablet:h-[40px] max-tablet:text-[24px]
                  ${pagination.page === pageNumber ? "text-white" : ""}`}
                  href={pageNumber === 1 ? "/news" : `/news?page=${pageNumber}`}
                  prefetch={false}
                >
                  {pageNumber}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </PageContainer>
  );
};
