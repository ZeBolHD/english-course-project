import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import { TeacherMinProps } from "@/modules/types";

export const getTeachersData = async (): Promise<TeacherMinProps[] | null> => {
  const url = `${STRAPI_API_ENDPOINT}/teachers-page`;

  return fetch(url)
    .then((res) => res.json())
    .catch(() => null);
};
