import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Teachers } from "@/modules/HomePage/components";

import { getTeachersData } from "@/modules/TeachersPage/api";

export const metadata: Metadata = {
  title: "Наши преподаватели",
  description: "Преподаватели центра языковой подготовки НХТИ",
};

const TeachersPage = async () => {
  const teachers = await getTeachersData();

  if (!teachers) {
    notFound();
  }

  return (
    <div className="mt-[100px]">
      <Teachers teachers={teachers} />
    </div>
  );
};

export default TeachersPage;
