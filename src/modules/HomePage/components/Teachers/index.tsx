import { TeacherMinProps } from "../../types";
import { TeacherCard } from "./TeacherCard";

export const Teachers = ({
  teacher_cards,
}: {
  teacher_cards: TeacherMinProps[];
}) => {
  return (
    <div className="mt-[200px]">
      <h2 className="font-black text-[80px] text-center text-primary-1 uppercase tracking-widest drop-shadow-text">
        Преподаватели
      </h2>
      <ul className="mt-[100px]">
        {teacher_cards.map((teacher: TeacherMinProps) => (
          <TeacherCard
            name={teacher.name}
            slug={teacher.slug}
            avatar={teacher.avatar}
            qualities={teacher.qualities}
            key={teacher.id}
          />
        ))}
      </ul>
    </div>
  );
};
