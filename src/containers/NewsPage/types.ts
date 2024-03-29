import { ImageApiProps } from "@/containers/types";

export interface ArticleProps {
  image?: ImageApiProps;
  heading: string;
  slug: string;
  description: string;
  createdAt: string;
}

export interface NewsPageProps {
  news: ArticleProps[];
  pagination: {
    page: number;
    pageCount: number;
  };
}
