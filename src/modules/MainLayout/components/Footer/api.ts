import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import {
  CourseCardProps,
  HomePageProps,
  TeacherMinProps,
} from "@/modules/HomePage/types";
import axios from "axios";
import { Contact, FooterProps } from "./types";

export const getFooterData = async () => {
  const { data } = await axios.get<HomePageProps>(
    `${STRAPI_API_ENDPOINT}/home-page`
  );

  const footerData: FooterProps = {
    teachers: data.teacher_cards.map((teacher: TeacherMinProps) => {
      return {
        name: teacher.name,
        slug: `/teachers/${teacher.slug}`,
      };
    }),
    courses: data.course_cards.map((course: CourseCardProps) => {
      return {
        name: course.name,
        slug: `/courses/${course.slug}`,
      };
    }),
    contacts: data.contacts as Contact[],
  };

  return footerData;
};
