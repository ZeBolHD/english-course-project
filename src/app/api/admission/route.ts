import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";

import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();

  const url = `${STRAPI_API_ENDPOINT}/candidates`;

  const status = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.status)
    .catch((err) => err.status);

  if (status === 200) {
    return NextResponse.json({ message: "success" }, { status: 200 });
  }

  return NextResponse.json({ message: "error" }, { status: 400 });
};
