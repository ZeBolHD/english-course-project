import { getCoursesData } from "@/helpers/api";
import { titleAddition } from "@/helpers/types";
import { Courses } from "@/modules/CoursesPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Наши курсы" + titleAddition,
  description: "Курсы центра языковой подготовки НХТИ",
};

const CoursesPage = async () => {
  const coursesData = await getCoursesData();

  if (!coursesData) {
    notFound();
  }

  return <Courses courses={coursesData} />;
};

export default CoursesPage;
