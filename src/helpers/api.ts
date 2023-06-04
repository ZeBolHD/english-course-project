import { HomePageProps } from "@/modules/HomePage/HomePage";
import { STRAPI_API_ENDPOINT } from "./endpoints";

export const getHomePageData = async () => {
  const homePageData: HomePageProps | null = await fetch(
    `${STRAPI_API_ENDPOINT}/home-page`
  )
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      console.log("error");
      return null;
    });

  return homePageData;
};
