import axios from "axios";
import { Candidate } from "./types";
import { NEXT_PUBLIC_STRAPI_ADMISSION_ENDPOINT } from "@/helpers/endpoints";

export const sendAdmission = async (data: Candidate) => {
  const candidateData = JSON.stringify({
    data: { ...data },
  });

  const { status } = await axios
    .post(NEXT_PUBLIC_STRAPI_ADMISSION_ENDPOINT, {
      data: {
        ...data,
      },
    })
    .then((res) => res)
    .catch((res) => res);
  console.log("запрос отправлен");

  return status;
};
