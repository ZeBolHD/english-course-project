import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import axios from "axios";
import { TeacherMinProps } from "./types";

export const getTeachersData = async () => {
  const { data } = await axios.get<TeacherMinProps[]>(
    STRAPI_API_ENDPOINT + "/teachers-page"
  );

  return data;
};
