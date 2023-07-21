import { ArticleCard } from "@/modules/NewsPage/components/ArticleCard";
import { ArticleProps } from "@/modules/NewsPage/types";
import Link from "next/link";

export const News = ({ articles }: { articles: ArticleProps[] }) => {
  return (
    <>
      <ul className="mt-[75px] max-desktop:mt-[60px] max-tablet:mt-[30px]">
        {articles.map((article) => (
          <ArticleCard key={article.heading} {...article} />
        ))}
        <div className="mt-10 flex justify-center">
          <Link
            className="py-[15px] px-[30px] border-[3px] border-primary-3 uppercase text-[20px] font-normal rounded-[50px]"
            href="/news"
            prefetch={false}
          >
            Все новости
          </Link>
        </div>
      </ul>
    </>
  );
};
