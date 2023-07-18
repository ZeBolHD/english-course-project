import { PageContainer } from "@/components/PageContainer";
import Link from "next/link";
import React from "react";
import { ArticleCard } from "./components/ArticleCard";
import { NewsPageProps } from "./types";

export const News = ({ news, pagination }: NewsPageProps) => {
  const pages = [...Array(pagination.pageCount)].map((_, index) => index + 1);

  return (
    <PageContainer title="Новости">
      <ul className="mt-[100px]">
        {news.map((article) => {
          return <ArticleCard {...article} key={article.slug} />;
        })}
      </ul>

      <ul className="flex justify-between mt-[40px] w-[100px]">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={`${
                pagination.page === page ? "text-white" : ""
              } text-[30px] flex items-center justify-center w-[45px] h-[45px] rounded-full bg-primary-2`}
            >
              <Link href={`/news?page=${page}`} prefetch={false}>
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </PageContainer>
  );
};
