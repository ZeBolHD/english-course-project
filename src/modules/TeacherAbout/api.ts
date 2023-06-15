import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import axios from "axios";
import { ITeacher } from "./types";

export const getTeacherDataBySlug = async (
  slug: string
): Promise<ITeacher | null> => {
  const link = `${STRAPI_API_ENDPOINT}/teachers?filters[slug]=${slug}`;

  try {
    const { data } = await axios.get(link);
    return data as ITeacher;
  } catch {
    return null;
  }
};
