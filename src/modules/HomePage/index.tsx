import dynamic from "next/dynamic";

import { HomePageProps } from "./types";

import {
  Banner,
  Hero,
  Advantages,
  Entrance,
  Courses,
  Teachers,
  Reviews,
  Trusted,
} from "./components";

import { HomePageItem } from "./components/HomePageItem";

const DynamicQAs = dynamic(() => import("./components/QAs"), {
  loading: () => <p>Loading...</p>,
});

const HomePage = ({
  banner,
  hero,
  advantage_cards,
  courses,
  teachers,
  qas,
  reviews,
  trusted_companies,
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
        <Courses courses={courses} />
      </HomePageItem>

      <HomePageItem>
        <Teachers teachers={teachers} />
      </HomePageItem>

      <HomePageItem>
        <Trusted companies={trusted_companies} />
      </HomePageItem>

      <HomePageItem>
        <DynamicQAs qas={qas} />
      </HomePageItem>

      <HomePageItem>
        <Reviews reviews={reviews} />
      </HomePageItem>
    </main>
  );
};

export default HomePage;
