import { ApiImage } from "@/helpers/types";

export interface TeacherAboutProps {
  id: number;
  name: string;
  description: string;
  avatar: ApiImage;
  achievements: AchievementProps[];
}

export interface AchievementProps {
  name: string;
  image: ApiImage;
}
