import Image from "next/image";

import { TeacherMinProps, TeachersProps } from "../types";

import { Title } from "@/ui/Title";
import { TeacherCard } from "../../ui/TeacherCard";

export const Teachers = ({ teachers }: TeachersProps) => {
  return (
    <>
      <h2 className="font-black text-[80px] text-primary-2 uppercase tracking-wider drop-shadow-text">
        {" "}
        Преподаватели
      </h2>
      <ul className="mt-[100px]">
        {teachers.map((teacher: TeacherMinProps) => (
          <TeacherCard
            name={teacher.name}
            slug={teacher.slug}
            avatar={teacher.avatar}
            qualities={teacher.qualities}
            key={teacher.id}
          />
        ))}
      </ul>
    </>
  );
};
