import { Contact } from "../../modules/MainLayout/components/Footer/types";
import { AdvantageCardProps } from "./components/Advantages/types";
import { BannerProps } from "./components/Banner/types";
import { CourseCardProps } from "../../components/CourseCard/types";
import { HeroProps } from "./components/Hero/types";
import { QAItemProps } from "./components/QAs/types";
import { ReviewCardProps } from "./components/Reviews/types";
import { TrustedCompany } from "./components/Trusted/types";
import { TeacherMinProps } from "@/components/TeacherCard/types";
import { ArticleProps } from "../NewsPage/types";

export interface HomePageItemProps {
  title?: string;
  id?: string;
  children: React.ReactNode;
}

export interface TitleProps {
  text: string;
  id?: string;
}

export interface HomePageProps {
  banner: BannerProps;
  hero: HeroProps;
  articles: ArticleProps[];
  advantage_cards: AdvantageCardProps[];
  courses: CourseCardProps[];
  teachers: TeacherMinProps[];
  contacts?: Contact[];
  qas: QAItemProps[];
  reviews: ReviewCardProps[];
  trusted_companies: TrustedCompany[];
}
