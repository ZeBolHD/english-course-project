import { notFound } from "next/navigation";

import { getCoursesData } from "@/helpers/api";
import { getCourseDataBySlug } from "@/modules/CourseAbout/api";

import { CourseAbout } from "@/modules/CourseAbout";
import { ParamsProps } from "@/modules/types";
import { Metadata } from "next";
import { titleAddition } from "@/helpers/types";

export const generateMetadata = async ({
  params,
}: ParamsProps): Promise<Metadata> => {
  const courseData = await getCourseDataBySlug(params.slug);

  return {
    title: courseData?.name + titleAddition,
    description: courseData?.description,
  };
};

const CourseAboutPage = async ({ params }: ParamsProps) => {
  const courseData = await getCourseDataBySlug(params.slug);

  if (!courseData) {
    notFound();
  }

  console.log(courseData);

  return (
    <CourseAbout
      name={courseData.name}
      slug={courseData.slug}
      image={courseData.image}
      start={courseData.start}
      intensity={courseData.intensity}
      duration={courseData.duration}
      persons={courseData.persons}
      hours={courseData.hours}
      price={courseData.price}
      price_taxless={courseData.price_taxless}
      books={courseData.books}
      language_levels={courseData.language_levels}
      description={courseData.description}
    />
  );
};

export const generateStaticParams = async () => {
  const data = await getCoursesData();

  if (!data) {
    notFound();
  }

  const slugs = data.map((item) => {
    return {
      slug: item.slug,
    };
  });

  return slugs;
};

export const dynamicParams = false;

export default CourseAboutPage;
