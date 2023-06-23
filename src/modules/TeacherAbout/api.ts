import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import { TeacherAboutProps } from "./types";

export const getTeacherDataBySlug = async (
  slug: string
): Promise<TeacherAboutProps | null> => {
  const link = `${STRAPI_API_ENDPOINT}/teachers?filters[slug]=${slug}`;

  return await fetch(link)
    .then((res) => res.json())
    .catch(() => null);
};
