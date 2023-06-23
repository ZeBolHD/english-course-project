import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import { TeacherMinProps } from "@/modules/types";
import { CourseCardProps } from "@/ui/CourseCard/types";

const fetchData = async <T>(url: string): Promise<T> => {
  return fetch(url)
    .then((res) => res.json())
    .catch(() => null);
};

export const getTeachersData = async () => {
  const url = `${STRAPI_API_ENDPOINT}/teachers-page`;

  return fetchData<TeacherMinProps[] | null>(url);
};

export const getCoursesData = async () => {
  const url = `${STRAPI_API_ENDPOINT}/courses-page`;

  return fetchData<CourseCardProps[] | null>(url);
};
