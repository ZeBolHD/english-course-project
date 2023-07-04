import { TeachersProps } from "../types";

import { TeacherCard } from "../../ui/TeacherCard";
import { notFound } from "next/navigation";

export const Teachers = ({ teachers }: TeachersProps) => {
  if (!teachers || teachers.length === 0) {
    notFound();
  }

  return (
    <div className="mt-[100px] relative">
      <h2 className="font-black text-[80px] text-primary-2 uppercase tracking-wider drop-shadow-text">
        Преподаватели
      </h2>
      <ul className="mt-[100px]">
        {teachers.map((teacher) => (
          <TeacherCard {...teacher} key={teacher.id} />
        ))}
      </ul>
    </div>
  );
};
