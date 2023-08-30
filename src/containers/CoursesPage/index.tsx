import { CoursesProps } from "../types";
import { CourseCard } from "@/components/CourseCard";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/PageContainer";

export const Courses = ({ courses }: CoursesProps) => {
  if (!courses || courses.length === 0) {
    notFound();
  }

  return (
    <PageContainer title="Курсы">
      <ul className="mt-[75px] max-desktop:mt-[60px] max-tablet:mt-[30px]">
        {courses.map((course) => {
          return (
            <CourseCard
              key={course.name}
              name={course.name}
              slug={course.slug}
              duration={course.duration}
              start={course.start}
              hours={course.hours}
              price={course.price}
              price_taxless={course.price_taxless}
              language_levels={course.language_levels}
              intensity={course.intensity}
              persons={course.persons}
            />
          );
        })}
      </ul>
    </PageContainer>
  );
};
