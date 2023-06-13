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
      course_cards={homePageData.course_cards}
      teacher_cards={homePageData.teacher_cards}
      qas={homePageData.qas}
    />
  );
};

export default Home;
