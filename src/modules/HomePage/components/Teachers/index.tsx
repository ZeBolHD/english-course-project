import { TeachersProps } from "@/modules/types";
import { TeacherCard } from "@/components/TeacherCard";

import Image from "next/image";

export const Teachers = ({ teachers }: TeachersProps) => {
  if (!teachers || teachers.length === 0) {
    return null;
  }

  return (
    <>
      <Image
        className="absolute -top-[300px] -right-[45%] -z-10 max-desktop:hidden"
        src="/assets/teachers/lines.svg"
        width={600}
        height={850}
        alt="lines"
      />
      <ul className="mt-[75px] max-desktop:mt-[60px] max-tablet:mt-[30px]">
        {teachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            name={teacher.name}
            slug={teacher.slug}
            avatar={teacher.avatar}
            qualities={teacher.qualities}
          />
        ))}
      </ul>
      <Image
        className="absolute w-[600px] h-[850px] top-[75%] -left-[50%] rotate-180 -z-10 max-desktop:hidden"
        src="/assets/teachers/lines.svg"
        width={600}
        height={850}
        alt="lines"
      />
    </>
  );
};
