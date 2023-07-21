import { PageContainer } from "@/components/PageContainer";
import Link from "next/link";
import React from "react";
import { ArticleCard } from "./components/ArticleCard";
import { NewsPageProps } from "./types";

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
          {pages.map((page) => {
            return (
              <li key={page} className="ml-[25px] first:ml-0">
                <Link
                  className={`text-[30px] flex items-center justify-center w-[45px] h-[45px] rounded-full
                bg-primary-2
                  ${pagination.page === page ? "text-white" : ""}`}
                  href={`/news?page=${page}`}
                  prefetch={false}
                >
                  {page}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </PageContainer>
  );
};
