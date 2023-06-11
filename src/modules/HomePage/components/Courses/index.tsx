import { CourseCardProps } from "../../types";
import { CourseCard } from "./CourseCard";

export const Courses = ({
  course_cards,
}: {
  course_cards: CourseCardProps[];
}) => {
  return (
    <div className="mt-[200px]">
      <h2 className="font-black text-[80px] text-center text-primary-1 uppercase tracking-widest drop-shadow-text">
        Курсы
      </h2>
      <ul>
        {course_cards.map((course: CourseCardProps, i: number) => {
          return (
            <CourseCard
              key={i}
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
    </div>
  );
};
