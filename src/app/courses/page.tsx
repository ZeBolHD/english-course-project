import { getCoursesData } from "@/helpers/api";
import { Courses } from "@/modules/CoursesPage";
import { notFound } from "next/navigation";
import React from "react";

const CoursesPage = async () => {
  const coursesData = await getCoursesData();

  if (!coursesData) {
    notFound();
  }

  return <Courses courses={coursesData} />;
};

export default CoursesPage;
