import { Candidate } from "./types";

enum Message {
  SUCCESS = "success",
  ERROR = "error",
}

export const sendAdmission = async (candidate: Candidate): Promise<Message> => {
  const data = { data: { ...candidate } };

  const url = "/api/admission";

  const { message } = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err.json());

  return message;
};
