import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import { PolicyProps } from "@/modules/PolicyPage/types";

import { CourseCardProps } from "@/ui/CourseCard/types";
import { TeacherMinProps } from "@/ui/TeacherCard/types";

export const fetchData = async <T>(url: string): Promise<T | null> => {
  return fetch(url)
    .then((res) => res.json())
    .catch(() => null);
};

export const getTeachersData = async () => {
  const url = `${STRAPI_API_ENDPOINT}/teachers-page`;

  return fetchData<TeacherMinProps[]>(url);
};

export const getCoursesData = async () => {
  const url = `${STRAPI_API_ENDPOINT}/courses-page`;

  return fetchData<CourseCardProps[]>(url);
};

export const getPoliciesData = async () => {
  const url = `${STRAPI_API_ENDPOINT}/policy-page`;

  return await fetchData<PolicyProps[]>(url);
};
