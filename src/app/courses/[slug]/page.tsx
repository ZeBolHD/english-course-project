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

  return <CourseAbout {...courseData} />;
};

export const generateStaticParams = async () => {
  const data = await getCoursesData();

  if (!data) {
    notFound();
  }

  const slugs = data.map((course) => {
    return {
      slug: course.slug,
    };
  });

  return slugs;
};

export const dynamic = "auto";

export default CourseAboutPage;
