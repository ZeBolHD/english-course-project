import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const revalidateTeacher = async (slug: string) => {
  console.log(`revalidating slug: ${slug}...`);
  console.log(`revalidating: /teachers...`);

  revalidatePath("/teachers");
  // revalidateTag(`/teachers/${slug}`);
  revalidateHomePage();
};

const revalidateCourse = async (slug: string) => {
  console.log(`revalidating slug: ${slug}...`);
  console.log(`revalidating: /courses...`);

  revalidatePath("/courses");
  revalidatePath("/courses/[slug]");
  // revalidateTag(`/courses/${slug}`);
  revalidateHomePage();
};

const revalidateHomePage = async () => {
  console.log(`revalidating: /...`);

  revalidatePath("/");
};

export async function POST(request: NextRequest) {
  const req = await request.json();

  const model = req.model;
  const slug = req.entry?.slug;

  switch (model) {
    case "teacher": {
      await revalidateTeacher(slug);
      break;
    }

    case "teachers-page": {
      revalidatePath("/teachers");
      break;
    }

    case "courses-page": {
      revalidatePath("/courses");
      break;
    }

    case "course": {
      revalidateCourse(slug);
      break;
    }

    case "policy-page": {
      revalidatePath("/policy");
      break;
    }

    case "policy": {
      revalidatePath("/policy");
      break;
    }

    case "home-page": {
      revalidateHomePage();
      break;
    }

    case "advantage-card": {
      revalidateHomePage();
      break;
    }

    case "qa": {
      revalidateHomePage();
      break;
    }

    case "review": {
      revalidateHomePage();
      break;
    }

    case "trusted-company": {
      revalidateHomePage();
      break;
    }

    case "contact": {
      revalidateHomePage();
      break;
    }
  }

  return NextResponse.json({ revalidated: true });
}
