import axios from "axios";
import { Candidate } from "./types";
import { NEXT_PUBLIC_STRAPI_ADMISSION_ENDPOINT } from "@/helpers/endpoints";

enum Status {
  SUCCESS = "success",
  ERROR = "error",
}

const setStatus = (status: number): Status => {
  if (status === 200) {
    return Status.SUCCESS;
  }

  return Status.ERROR;
};

export const sendAdmission = async (data: Candidate) => {
  const { statusNumber } = await axios
    .post(NEXT_PUBLIC_STRAPI_ADMISSION_ENDPOINT, {
      data: {
        ...data,
      },
    })
    .then((res) => res)
    .catch((res) => res);

  const status = setStatus(statusNumber);

  return status;
};
