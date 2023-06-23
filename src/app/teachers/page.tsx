import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Teachers } from "@/modules/TeachersPage";
import { getTeachersData } from "@/helpers/api";
import { titleAddition } from "@/helpers/types";

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
