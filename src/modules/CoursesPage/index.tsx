import React from "react";
import { CoursesProps } from "../types";
import { CourseCard } from "@/ui/CourseCard";
import { notFound } from "next/navigation";

export const Courses = ({ courses }: CoursesProps) => {
  if (!courses || courses.length === 0) {
    notFound();
  }

  return (
    <div className="mt-[100px] relative max-desktop:mt-[60px]">
      <h2
        className="font-black text-[80px] text-primary-2 uppercase tracking-wider drop-shadow-text
      max-laptop:text-center max-laptop:text-[60px] max-tablet:text-[30px]"
      >
        Курсы
      </h2>

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
    </div>
  );
};
