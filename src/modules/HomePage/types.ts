import { Contact } from "../MainLayout/components/Footer/types";
import { AdvantageCardProps } from "./components/Advantages/types";
import { BannerProps } from "./components/Banner/types";
import { CourseCardProps } from "./components/Courses/types";
import { HeroProps } from "./components/Hero/types";
import { TeacherMinProps } from "../TeachersPage/types";
import { QAItemProps } from "./components/QAs/types";
import { ReviewCardProps } from "./components/Reviews/types";

export interface HomePageProps {
  banner: BannerProps;
  hero: HeroProps;
  advantage_cards: AdvantageCardProps[];
  courses: CourseCardProps[];
  teachers: TeacherMinProps[];
  contacts?: Contact[];
  qas: QAItemProps[];
  reviews: ReviewCardProps[];
}
