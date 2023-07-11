import { revalidatePath } from "next/cache";

const revalidateTeachersPage = async () => {
  console.log(`revalidating: /teachers...`);
  revalidatePath("/teachers");
};

const revalidateTeacher = async (slug: string) => {
  console.log(`revalidating: /teachers...`);
  console.log(`revalidating slug: ${slug}...`);

  revalidatePath("/teachers");
  revalidateHomePage();
};

const revalidateCoursesPage = async () => {
  console.log(`revalidating: /courses...`);
  revalidatePath("/courses");
};

const revalidateCourse = async (slug: string) => {
  console.log(`revalidating: /courses...`);
  console.log(`revalidating slug: ${slug}...`);

  revalidatePath("/courses");
  revalidateHomePage();
};

const revalidateHomePage = async () => {
  console.log(`revalidating: /...`);

  revalidatePath("/");
};

const revalidatePolicyPage = async () => {
  console.log(`revalidating: /policy...`);
  revalidatePath("/policy");
};

const revalidatePhotosPage = async () => {
  console.log(`revalidating: /photos...`);
  revalidatePath("/photos");
};

export const revalidate = async (model: string, slug: string) => {
  switch (model) {
    case "teacher": {
      await revalidateTeacher(slug);
      break;
    }

    case "teachers-page": {
      await revalidateTeachersPage();
      break;
    }

    case "courses-page": {
      await revalidateCoursesPage();
      break;
    }

    case "course": {
      await revalidateCourse(slug);
      break;
    }

    case "policy-page": {
      await revalidatePolicyPage();
      break;
    }

    case "policy": {
      await revalidatePolicyPage();
      break;
    }

    case "home-page": {
      await revalidateHomePage();
      break;
    }

    case "advantage-card": {
      await revalidateHomePage();
      break;
    }

    case "qa": {
      await revalidateHomePage();
      break;
    }

    case "review": {
      await revalidateHomePage();
      break;
    }

    case "trusted-company": {
      await revalidateHomePage();
      break;
    }

    case "contact": {
      await revalidateHomePage();
      break;
    }

    case "photos-page": {
      await revalidatePhotosPage();
    }

    case "file": {
      await revalidateHomePage();
    }
  }
};
