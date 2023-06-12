import { HomePageProps } from "@/modules/HomePage/types";
import axios from "axios";
import { STRAPI_API_ENDPOINT } from "./endpoints";

export const getHomePageData = async () => {
  const { data } = await axios.get<HomePageProps>(
    `${STRAPI_API_ENDPOINT}/home-page`
  );

  return data;
};
