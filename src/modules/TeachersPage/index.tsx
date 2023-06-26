import { TeachersProps } from "../types";

import { TeacherCard } from "../../ui/TeacherCard";

export const Teachers = ({ teachers }: TeachersProps) => {
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
