import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import { TeacherAboutProps } from "./types";
import { fetchData } from "@/helpers/api";

export const getTeacherDataBySlug = async (slug: string) => {
  const url = `${STRAPI_API_ENDPOINT}/teachers?filters[slug]=${slug}`;

  return await fetchData<TeacherAboutProps | null>(url);
};
