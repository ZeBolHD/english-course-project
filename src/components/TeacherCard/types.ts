import { ImageApiProps } from "@/modules/types";

export interface TeacherMinProps {
  id?: string;
  name: string;
  avatar: ImageApiProps;
  slug: string;
  qualities: string[];
}
