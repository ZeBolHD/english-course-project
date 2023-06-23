import React from "react";
import { CoursesProps } from "../types";
import { CourseCard } from "@/ui/CourseCard";

export const Courses = ({ courses }: CoursesProps) => {
  return (
    <div className="mt-[100px] relative">
      <h2 className="font-black text-[80px] text-primary-2 uppercase tracking-wider drop-shadow-text">
        Курсы
      </h2>

      <ul className="mt-[75px]">
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
    </div>
  );
};
