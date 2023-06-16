import { Title } from "@/ui/Title";
import { TeacherMinProps, TeachersProps } from "./types";
import { TeacherCard } from "./TeacherCard";
import Image from "next/image";

export const Teachers = ({ teachers }: TeachersProps) => {
  return (
    <>
      <Image
        className="absolute -top-[300px] -right-[45%]"
        src="/assets/teachers-page/lines.svg"
        width={600}
        height={850}
        alt="lines"
      />
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
      <Image
        className="absolute w-[600px] h-[850px] top-[75%] -left-[50%] rotate-180"
        src="/assets/teachers-page/lines.svg"
        width={600}
        height={850}
        alt="lines"
      />
    </>
  );
};
