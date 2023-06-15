import { getHomePageData } from "@/helpers/api";
import HomePage from "@/modules/HomePage/HomePage";
import { HomePageProps } from "@/modules/HomePage/types";
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
      courses={homePageData.courses}
      teachers={homePageData.teachers}
      qas={homePageData.qas}
      reviews={homePageData.reviews}
    />
  );
};

export default Home;
