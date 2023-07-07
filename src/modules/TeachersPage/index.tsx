import { TeachersProps } from "../types";

import { TeacherCard } from "../../components/TeacherCard";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/PageContainer";

export const Teachers = ({ teachers }: TeachersProps) => {
  if (!teachers || teachers.length === 0) {
    notFound();
  }

  return (
    <PageContainer title="Преподаватели">
      <ul className="mt-[75px] max-desktop:mt-[60px] max-tablet:mt-[30px]">
        {teachers.map((teacher) => (
          <TeacherCard {...teacher} key={teacher.id} />
        ))}
      </ul>
    </PageContainer>
  );
};
