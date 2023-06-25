import { getHomePageData } from "@/modules/HomePage/api";
import HomePage from "@/modules/HomePage";
import { HomePageProps } from "@/modules/HomePage/types";
import { notFound } from "next/navigation";

const Home = async () => {
  const homePageData = await getHomePageData();

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
      trusted_companies={homePageData.trusted_companies}
    />
  );
};

export default Home;
