import Advantages from "./components/Advantages/Advantages";
import { Banner } from "./components/Banner/Banner";
import Hero from "./components/Hero";
import {
  AdvantageCardProps,
  BannerProps,
  HeroProps,
  TeacherMinProps,
} from "./types";

export interface HomePageProps {
  banner: BannerProps;
  hero: HeroProps;
  advantage_cards: AdvantageCardProps[];
  teachers: TeacherMinProps[];
}

const HomePage = ({
  banner,
  hero,
  advantage_cards,
  teachers,
}: HomePageProps) => {
  return (
    <main>
      <Banner text={banner.text} />
      <Hero text={hero.text} slogan={hero.slogan} header={hero.header} />
      <Advantages advantage_cards={advantage_cards} />
    </main>
  );
};

export default HomePage;
