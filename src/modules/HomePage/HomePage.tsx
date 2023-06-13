import {
  Banner,
  Hero,
  Advantages,
  Entrance,
  Courses,
  Teachers,
  QAs,
} from "./components";
import { HomePageItem } from "./components/HomePageItem";
import { HomePageProps } from "./types";

const HomePage = ({
  banner,
  hero,
  advantage_cards,
  course_cards,
  teacher_cards,
  qas,
}: HomePageProps) => {
  console.log(qas);
  return (
    <main>
      <Banner text={banner.text} />

      <HomePageItem>
        <Hero text={hero.text} slogan={hero.slogan} header={hero.header} />
      </HomePageItem>

      <HomePageItem>
        <Advantages advantage_cards={advantage_cards} />
      </HomePageItem>

      <HomePageItem>
        <Entrance />
      </HomePageItem>

      <HomePageItem>
        <Courses course_cards={course_cards} />
      </HomePageItem>

      <HomePageItem>
        <Teachers teacher_cards={teacher_cards} />
      </HomePageItem>

      <HomePageItem>
        <QAs qas={qas} />
      </HomePageItem>
    </main>
  );
};

export default HomePage;
