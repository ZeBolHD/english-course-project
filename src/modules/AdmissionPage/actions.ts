import { Candidate } from "./types";
import { NEXT_PUBLIC_STRAPI_ADMISSION_ENDPOINT } from "@/helpers/endpoints";

enum Status {
  SUCCESS = "success",
  ERROR = "error",
}

const getStatusByNumber = (status: number): Status => {
  if (status === 200) {
    return Status.SUCCESS;
  }

  return Status.ERROR;
};

export const sendAdmission = async (candidate: Candidate): Promise<Status> => {
  const data = { data: { ...candidate } };

  const status = await fetch(NEXT_PUBLIC_STRAPI_ADMISSION_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.status)
    .catch((err) => err.message);

  return getStatusByNumber(status);
};
