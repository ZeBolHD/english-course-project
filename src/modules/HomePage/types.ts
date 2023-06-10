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

export interface TeacherMinProps {
  id: string;
  name: string;
  avatar: AvatarProps;
}
