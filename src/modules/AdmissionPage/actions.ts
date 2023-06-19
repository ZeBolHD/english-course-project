import axios from "axios";
import { Candidate } from "./types";
import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";

export const onSubmit = async (data: Candidate) => {
  const candidateData = JSON.stringify({
    data: { ...data },
  });
  axios
    .post(STRAPI_API_ENDPOINT + "/candidates", {
      data: {
        ...data,
      },
    })
    .then((res) => console.log(res));
  console.log("запрос отправлен");

  console.log(data);
};
