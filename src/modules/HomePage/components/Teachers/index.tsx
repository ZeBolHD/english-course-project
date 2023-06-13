import { Title } from "@/ui/Title";
import { TeacherMinProps } from "./types";
import { TeacherCard } from "./TeacherCard";

export const Teachers = ({
  teacher_cards,
}: {
  teacher_cards: TeacherMinProps[];
}) => {
  return (
    <>
      <Title text="Преподаватели" />
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
    </>
  );
};
