import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import { HomePageProps } from "./types";

export const getHomePageData = async (): Promise<HomePageProps | null> => {
  return await fetch(`${STRAPI_API_ENDPOINT}/home-page`)
    .then((res) => res.json())
    .catch(() => null);
};
