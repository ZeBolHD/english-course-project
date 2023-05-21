import { getTeacherDataBySlug } from "@/modules/TeacherAbout/api";
import TeacherAbout from "@/modules/TeacherAbout/TeacherAbout";
import { ITeacher } from "@/modules/TeacherAbout/types";
import { notFound } from "next/navigation";

const Page = async ({ params }: any) => {
  const teacherData: ITeacher | null = await getTeacherDataBySlug(params.slug);

  if (!teacherData) {
    notFound();
  }

  return (
    <>
      <TeacherAbout teacherData={teacherData} />
    </>
  );
};

export const generateStaticParams = async () => {
  const data = await fetch("http://127.0.0.1:1337/api/teachers-page").then(
    (res) => res.json()
  );

  const slugs = data.map((item: any) => {
    return {
      slug: item.slug,
    };
  });

  return slugs;
};

export const dynamicParams = false;

export default Page;
