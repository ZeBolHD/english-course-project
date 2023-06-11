import { Banner, Hero, Advantages, Entrance, Courses } from "./components";
import { HomePageProps } from "./types";

const HomePage = ({
  banner,
  hero,
  advantage_cards,
  course_cards,
  teachers,
}: HomePageProps) => {
  return (
    <main>
      <Banner text={banner.text} />
      <Hero text={hero.text} slogan={hero.slogan} header={hero.header} />
      <Advantages advantage_cards={advantage_cards} />
      <Entrance />
      <Courses course_cards={course_cards} />
    </main>
  );
};

export default HomePage;
