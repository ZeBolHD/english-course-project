import { getHomePageData } from "@/helpers/api";
import HomePage, { HomePageProps } from "@/modules/HomePage/HomePage";
import Link from "next/link";
import { notFound } from "next/navigation";

const Home = async () => {
  const homePageData: HomePageProps | null = await getHomePageData();

  if (!homePageData) {
    notFound();
  }

  return (
    <HomePage
      banner={homePageData.banner}
      hero={homePageData.hero}
      advantage_cards={homePageData.advantage_cards}
      teachers={homePageData.teachers}
    />
  );
};

export default Home;
