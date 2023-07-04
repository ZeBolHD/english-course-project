import { TeachersProps } from "../types";

import { TeacherCard } from "../../ui/TeacherCard";
import { notFound } from "next/navigation";

export const Teachers = ({ teachers }: TeachersProps) => {
  if (!teachers || teachers.length === 0) {
    notFound();
  }

  return (
    <div className="mt-[100px] relative max-desktop:mt-[60px]">
      <h2
        className="font-black text-[80px] text-primary-2 uppercase tracking-wider drop-shadow-text
      max-laptop:text-center max-laptop:text-[60px] max-tablet:text-[30px]"
      >
        Преподаватели
      </h2>
      <ul className="mt-[75px] max-desktop:mt-[60px] max-tablet:mt-[30px]">
        {teachers.map((teacher) => (
          <TeacherCard {...teacher} key={teacher.id} />
        ))}
      </ul>
    </div>
  );
};
