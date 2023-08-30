import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Teachers } from "@/containers/TeachersPage";
import { getTeachersData } from "@/helpers/api";
import { titleAddition } from "@/helpers/consts";

export const metadata: Metadata = {
  title: "Наши преподаватели" + titleAddition,
  description: "Преподаватели центра языковой подготовки НХТИ",
};

const TeachersPage = async () => {
  const teachers = await getTeachersData();

  if (!teachers) {
    notFound();
  }

  return <Teachers teachers={teachers} />;
};

export default TeachersPage;
