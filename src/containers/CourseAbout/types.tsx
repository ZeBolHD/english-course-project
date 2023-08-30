import { ImageApiProps } from "../types";

export interface CourseAboutProps {
  name: string;
  slug: string;
  image: ImageApiProps;
  duration: string;
  start: string;
  hours: number;
  price: number;
  price_taxless: number;
  language_levels: string[];
  intensity: string;
  persons: string;
  books: string[];
  description: string;
}
