import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";

import { fetchData } from "@/helpers/api";

import { CourseAboutProps } from "./types";

export const getCourseDataBySlug = async (slug: string) => {
  const url = `${STRAPI_API_ENDPOINT}/courses?filters[slug]=${slug}`;
  return await fetchData<CourseAboutProps | null>(url);
};
