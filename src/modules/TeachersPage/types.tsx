import { AvatarProps } from "@/modules/types";

export interface TeacherMinProps {
  id?: string;
  name: string;
  avatar: AvatarProps;
  slug: string;
  qualities: string[];
}

export interface TeachersProps {
  teachers: TeacherMinProps[];
}

export interface QualitiesProps {
  items: string[];
}
