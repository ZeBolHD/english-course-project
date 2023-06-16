import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import { TeacherMinProps } from "@/modules/types";
import axios from "axios";

export const getTeachersData = async () => {
  const { data } = await axios.get<TeacherMinProps[]>(
    STRAPI_API_ENDPOINT + "/teachers-page"
  );

  return data;
};
