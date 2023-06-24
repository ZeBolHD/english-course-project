import { HomePageProps } from "@/modules/HomePage/types";
import { Contact, FooterProps } from "./types";

import { getHomePageData } from "@/modules/HomePage/api";

const formFooterData = (data: HomePageProps) => {
  return {
    teachers: data.teachers.map((teacher) => {
      return {
        name: teacher.name,
        slug: `/teachers/${teacher.slug}`,
      };
    }),
    courses: data.courses.map((course) => {
      return {
        name: course.name,
        slug: `/courses/${course.slug}`,
      };
    }),
    contacts: data.contacts as Contact[],
  };
};

export const getFooterData = async (): Promise<FooterProps | null> => {
  const data = await getHomePageData();

  return data && formFooterData(data);
};
