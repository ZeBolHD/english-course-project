import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import { HomePageProps } from "./types";
import { fetchData } from "@/helpers/api";

export const getHomePageData = async () => {
  const url = `${STRAPI_API_ENDPOINT}/home-page`;

  return await fetchData<HomePageProps | null>(url);
};
