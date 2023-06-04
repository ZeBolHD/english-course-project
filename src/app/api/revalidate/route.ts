import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  console.log(req);

  const model = req.model;
  const slug = req.entry?.slug;

  let pathToRevalidate: string = "/";

  switch (model) {
    case "teacher": {
      revalidateTag(`/teachers/${slug}`);
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

  revalidatePath(pathToRevalidate);
  return NextResponse.json({ revalidated: true });
}
