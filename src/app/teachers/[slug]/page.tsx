import { Metadata } from "next";

import { notFound } from "next/navigation";
import { TeacherAbout } from "@/modules/TeacherAbout/TeacherAbout";

import { getTeachersData } from "@/helpers/api";
import { getTeacherDataBySlug } from "@/modules/TeacherAbout/api";

import { titleAddition } from "@/helpers/types";
import { ParamsProps } from "@/modules/types";

export const generateMetadata = async ({
  params,
}: ParamsProps): Promise<Metadata> => {
  const teacherData = await getTeacherDataBySlug(params.slug);
  return {
    title: teacherData?.name + titleAddition,
    description: teacherData?.description,
  };
};

const TeacherPage = async ({ params }: ParamsProps) => {
  const teacherData = await getTeacherDataBySlug(params.slug);

  if (!teacherData) {
    notFound();
  }

  return (
    <>
      <TeacherAbout
        id={teacherData.id}
        name={teacherData.name}
        description={teacherData.description}
        achievements={teacherData.achievements}
        avatar={teacherData.avatar}
      />
    </>
  );
};

export const generateStaticParams = async () => {
  const data = await getTeachersData();

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

export default TeacherPage;
