import { Banner } from "./components/Banner";
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
    </main>
  );
};

export default HomePage;
