import { Title } from "@/ui/Title";
import { CourseCardProps } from "./types";
import { CourseCard } from "./CourseCard";

export const Courses = ({
  course_cards,
}: {
  course_cards: CourseCardProps[];
}) => {
  return (
    <>
      <Title text="Курсы" />
      <ul className="mt-[75px]">
        {course_cards.map((course: CourseCardProps) => {
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
