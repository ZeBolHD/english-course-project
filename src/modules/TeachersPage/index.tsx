import { Title } from "@/ui/Title";
import { TeacherMinProps, TeachersProps } from "./types";
import { TeacherCard } from "./TeacherCard";

export const Teachers = ({ teachers }: TeachersProps) => {
  return (
    <>
      <Title id="teachers" text="Преподаватели" />
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
