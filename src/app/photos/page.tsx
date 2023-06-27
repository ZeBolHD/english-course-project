import { notFound } from "next/navigation";
import { Metadata } from "next";

import { Photos } from "@/modules/PhotosPage";

import { getPhotosPageData } from "@/helpers/api";
import { titleAddition } from "@/helpers/types";

export const metadata: Metadata = {
  title: "Наши фотографии" + titleAddition,
  description: "Фотографии центра языковой подготовки НХТИ",
};

const PhotosPage = async () => {
  const photos = await getPhotosPageData();

  if (!photos) {
    return notFound();
  }

  return <Photos photos={photos} />;
};

export default PhotosPage;
