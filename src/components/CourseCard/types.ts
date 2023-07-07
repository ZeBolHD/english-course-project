import { ReactNode } from "react";

export interface ListItemProps {
  name: string;
  children?: ReactNode;
  value?: string | number;
}

export interface CourseCardProps {
  name: string;
  slug: string;
  duration: string;
  start: string;
  hours: number;
  price: number;
  price_taxless: number;
  language_levels: string[];
  intensity: string;
  persons: string;
}
