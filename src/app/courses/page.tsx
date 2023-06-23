import { getCoursesData } from "@/helpers/api";
import { Courses } from "@/modules/CoursesPage";
import React from "react";

const CoursesPage = async () => {
  const coursesData = await getCoursesData();

  return <Courses />;
};

export default CoursesPage;
