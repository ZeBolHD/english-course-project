import Image from "next/image";
import { CourseCard } from "@/components/CourseCard";
import { CoursesProps } from "@/modules/types";

export const Courses = ({ courses }: CoursesProps) => {
  if (courses.length === 0) {
    return null;
  }

  return (
    <>
      <Image
        className="absolute -z-10 top-[125px] right-0 w-[320px] h-[185px] max-desktop:hidden"
        src="/assets/home-page/courses/pattern1.svg"
        width={320}
        height={185}
        alt="pattern"
      />
      <Image
        className="absolute -z-10 top-[500px] -right-[45%] w-[380px] h-[400px] max-desktop:hidden"
        src="/assets/home-page/courses/sun.svg"
        width={380}
        height={400}
        alt="sun"
      />
      <Image
        className="absolute -z-10 top-[1200px] -left-[30%] w-[425px] h-[325px] max-desktop:hidden"
        src="/assets/home-page/courses/ok.svg"
        width={500}
        height={405}
        alt="ok"
      />
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
      <Image
        className="absolute -z-10 top-[1500px] -right-[25%] w-[600px] h-[340px] max-desktop:hidden"
        src="/assets/home-page/courses/pattern2.svg"
        width={600}
        height={340}
        alt="pattern"
      />
    </>
  );
};
