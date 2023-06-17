import { ImageApiProps } from "../types";

export interface TeacherAboutProps {
  id: number;
  name: string;
  description: string;
  avatar: ImageApiProps;
  achievements: AchievementProps[];
}

export interface AchievementProps {
  name: string;
  image: ImageApiProps;
}
