import { TeacherMinProps, TeachersProps } from "@/modules/types";
import { TeacherCard } from "@/ui/TeacherCard";
import { Title } from "@/ui/Title";

import Image from "next/image";

export const Teachers = ({ teachers }: TeachersProps) => {
  return (
    <>
      <Image
        className="absolute -top-[300px] -right-[45%] -z-10"
        src="/assets/teachers/lines.svg"
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
        className="absolute w-[600px] h-[850px] top-[75%] -left-[50%] rotate-180 -z-10"
        src="/assets/teachers/lines.svg"
        width={600}
        height={850}
        alt="lines"
      />
    </>
  );
};
