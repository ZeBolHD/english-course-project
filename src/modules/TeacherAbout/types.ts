import { ApiImage } from "@/helpers/types";

export interface ITeacher {
  id: number;
  name: string;
  description: string;
  avatar: ApiImage;
  achievements: Achievement[];
}

type Achievement = {
  name: string;
  image: ApiImage;
};
