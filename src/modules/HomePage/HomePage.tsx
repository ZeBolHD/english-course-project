import dynamic from "next/dynamic";
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

const DynamicQAs = dynamic(() => import("./components/QAs"), {
  loading: () => <p>Loading...</p>,
});

const HomePage = ({
  banner,
  hero,
  advantage_cards,
  course_cards,
  teacher_cards,
  qas,
}: HomePageProps) => {
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
        <DynamicQAs qas={qas} />
      </HomePageItem>
    </main>
  );
};

export default HomePage;
