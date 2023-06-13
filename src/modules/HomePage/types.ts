import { Contact } from "../MainLayout/components/Footer/types";
import { AdvantageCardProps } from "./components/Advantages/types";
import { BannerProps } from "./components/Banner/types";
import { CourseCardProps } from "./components/Courses/types";
import { HeroProps } from "./components/Hero/types";
import { TeacherMinProps } from "./components/Teachers/types";
import { QAProps } from "./components/QAs/types";

export interface HomePageProps {
  banner: BannerProps;
  hero: HeroProps;
  advantage_cards: AdvantageCardProps[];
  course_cards: CourseCardProps[];
  teacher_cards: TeacherMinProps[];
  contacts?: Contact[];
  qas: QAProps[];
}
