import { PageContainer } from "@/components/PageContainer";
import { notFound } from "next/navigation";
import { PhotoCard } from "./components/PhotoCard";
import { PhotosPageProps } from "./types";

export const Photos = ({ photos }: PhotosPageProps) => {
  if (!photos || photos.length === 0) {
    notFound();
  }

  return (
    <PageContainer title="Фотографии">
      <ul
        className="mt-[75px] max-desktop:mt-[60px] max-tablet:mt-[30px] grid grid-cols-2 gap-[25px] 
        max-laptop:gap-[40px] max-mobile:grid-cols-1"
      >
        {photos.map((photo) => (
          <PhotoCard key={photo.alternativeText} {...photo} />
        ))}
      </ul>
    </PageContainer>
  );
};
