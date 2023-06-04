import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const model: string = req.body.model;
  const slug: string = req.body.entry?.slug;

  let pathToRevalidate = "/";

  switch (model) {
    case "home-page": {
      pathToRevalidate = "/";
      break;
    }

    case "teacher": {
      pathToRevalidate = `/teachers/${slug}`;
      break;
    }

    case "teachers-page": {
      pathToRevalidate = "/teachers";
      break;
    }

    default: {
      pathToRevalidate = "/";
      break;
    }
  }

  console.log(`revalidating: ${pathToRevalidate}...`);

  await res.revalidate(pathToRevalidate);

  return res.json({ revalidated: true });
}
