import { Teachers } from "@/modules/HomePage/components";
import { TeacherCard } from "@/modules/TeachersPage/TeacherCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Наши преподаватели",
  description: "Преподаватели центра языковой подготовки НХТИ",
};

const TeachersPage = async () => {
  const teachers: any = await getTeachersData();
  return (
    <div className="mt-[100px]">
      <Teachers teachers={teachers} />
    </div>
  );
};

const getTeachersData = async () => {
  const teachers = await fetch("http://127.0.0.1:1337/api/teachers-page")
    .then((res) => {
      return res.json();
    })
    .catch(() => console.log("error"));

  return teachers;
};

export default TeachersPage;
