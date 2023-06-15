import { Title } from "@/ui/Title";
import { CourseCardProps, CoursesProps } from "./types";
import { CourseCard } from "./CourseCard";

export const Courses = ({ courses }: CoursesProps) => {
  return (
    <>
      <Title id="courses" text="Курсы" />
      <ul className="mt-[75px]">
        {courses.map((course: CourseCardProps) => {
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
    </>
  );
};
