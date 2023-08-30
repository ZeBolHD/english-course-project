import { getHomePageData } from "@/containers/HomePage/api";
import HomePage from "@/containers/HomePage";

import { notFound } from "next/navigation";

const Home = async () => {
  const homePageData = await getHomePageData();

  if (!homePageData) {
    notFound();
  }

  return <HomePage {...homePageData} />;
};

export default Home;
