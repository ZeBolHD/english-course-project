import { STRAPI_UPLOADS_ENDPOINT } from "@/helpers/endpoints";

export const GET = async (req: Request) => {
  const filename = "Dogovor.doc";

  const url = `${STRAPI_UPLOADS_ENDPOINT}/Dogovor_83e2998bdb.doc`;

  const response = await fetch(url);

  return new Response(response.body, {
    headers: {
      ...response.headers,
      "content-disposition": `attachment; filename="${filename}"`,
    },
  });
};
