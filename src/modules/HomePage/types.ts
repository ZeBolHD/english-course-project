import { Contact } from "../MainLayout/components/Footer/types";
import { AvatarProps } from "../types";

export interface BannerProps {
  text: string;
}

export interface HeroProps {
  header: string;
  text: string;
  slogan: string;
}

export interface AdvantageCardProps {
  name: string;
  items: string[];
}

export interface CourseCardProps {
  name: string;
  slug: string;
  duration: string;
  start: string;
  hours: number;
  price: number;
  price_taxless: number;
  language_levels: string[];
  intensity: string;
  persons: string;
}

export interface TeacherMinProps {
  id?: string;
  name: string;
  avatar: AvatarProps;
  slug: string;
  qualities: string[];
}

export interface HomePageProps {
  banner: BannerProps;
  hero: HeroProps;
  advantage_cards: AdvantageCardProps[];
  course_cards: CourseCardProps[];
  teacher_cards: TeacherMinProps[];
  contacts: Contact[];
}
