import { Teachers } from "@/modules/HomePage/components";
import { TeacherCard } from "@/modules/TeachersPage/TeacherCard";
import Link from "next/link";

const TeachersPage = async () => {
  const teacher_cards: any = await getTeachersData();
  return (
    <>
      <Teachers teachers={teacher_cards} />
    </>
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
