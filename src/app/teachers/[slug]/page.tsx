import { getTeacherDataBySlug } from "@/modules/TeacherAbout/api";
import { TeacherAbout } from "@/modules/TeacherAbout/TeacherAbout";
import { TeacherAboutProps } from "@/modules/TeacherAbout/types";
import { TeacherMinProps } from "@/modules/TeachersPage/types";
import axios from "axios";
import { notFound } from "next/navigation";

const Page = async ({ params }: any) => {
  const teacherData: TeacherAboutProps | null = await getTeacherDataBySlug(
    params.slug
  );

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
  const { data } = await axios.get("http://127.0.0.1:1337/api/teachers-page");

  const slugs = data.map((item: TeacherMinProps) => {
    return {
      slug: item.slug,
    };
  });

  return slugs;
};

export const dynamicParams = false;

export default Page;
