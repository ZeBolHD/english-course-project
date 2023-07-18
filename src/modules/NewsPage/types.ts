import { ImageApiProps } from "../types";

export interface ArticleProps {
  image?: ImageApiProps;
  heading: string;
  slug: string;
  description: string;
}

export interface NewsPageProps {
  news: ArticleProps[];
  pagination: {
    page: number;
    pageCount: number;
  };
}
