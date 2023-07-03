import { CourseCardProps } from "@/ui/CourseCard/types";
import { TeacherMinProps } from "@/ui/TeacherCard/types";

export interface ImageApiProps {
  alternativeText: string;
  url: string;
  size: {
    width: number;
    height: number;
  };
}

export interface TeachersProps {
  teachers: TeacherMinProps[];
}

export interface QualitiesProps {
  items: string[];
}

export interface ParamsProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface CoursesProps {
  courses: CourseCardProps[];
}
