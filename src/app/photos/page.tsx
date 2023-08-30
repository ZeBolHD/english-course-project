import { notFound } from "next/navigation";
import { Metadata } from "next";

import { Photos } from "@/containers/PhotosPage";

import { getPhotosPageData } from "@/helpers/api";
import { titleAddition } from "@/helpers/consts";

export const metadata: Metadata = {
  title: "Наши фотографии" + titleAddition,
  description: "Фотографии центра языковой подготовки НХТИ",
};

const PhotosPage = async () => {
  const photos = await getPhotosPageData();

  if (!photos) {
    notFound();
  }

  return <Photos photos={photos} />;
};

export default PhotosPage;
