import { AvatarProps } from "../types";

export interface BannerProps {
  text: string;
}

export interface HeroProps {
  header: string;
  text: string;
}

export interface AdvantageCardProps {
  name: string;
  descriptions: string[];
}

export interface TeacherMinProps {
  id: string;
  name: string;
  avatar: AvatarProps;
}
