import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import axios from "axios";
import { HomePageProps } from "./types";

export const getHomePageData = async () => {
  const { data } = await axios.get<HomePageProps>(
    `${STRAPI_API_ENDPOINT}/home-page`
  );

  return data;
};
