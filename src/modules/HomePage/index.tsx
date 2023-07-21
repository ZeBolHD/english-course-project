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
  News,
} from "./components";

import { HomePageItem } from "./components/HomePageItem";

const DynamicQAs = dynamic(() => import("./components/QAs"), {
  loading: () => <p>Loading...</p>,
});

const HomePage = async ({
  banner,
  hero,
  articles,
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

      <HomePageItem title="Новости">
        <News articles={articles} />
      </HomePageItem>

      <HomePageItem title="Наши преимущества">
        <Advantages advantage_cards={advantage_cards} />
      </HomePageItem>

      <HomePageItem title="Как к нам поступить?">
        <Entrance />
      </HomePageItem>

      <HomePageItem title="Курсы">
        <Courses courses={courses} />
      </HomePageItem>

      <HomePageItem title="Преподаватели">
        <Teachers teachers={teachers} />
      </HomePageItem>

      <HomePageItem title="Нам доверяют">
        <Trusted companies={trusted_companies} />
      </HomePageItem>

      <HomePageItem title="Вопросы и ответы" id="qas">
        <DynamicQAs qas={qas} />
      </HomePageItem>

      <HomePageItem title="Отзывы" id="reviews">
        <Reviews reviews={reviews} />
      </HomePageItem>
    </main>
  );
};

export default HomePage;
