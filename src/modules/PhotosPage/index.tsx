import { notFound } from "next/navigation";
import { PhotoCard } from "./components/PhotoCard";
import { PhotosPageProps } from "./types";

export const Photos = ({ photos }: PhotosPageProps) => {
  if (!photos || photos.length === 0) {
    notFound();
  }

  return (
    <div className="mt-[100px] relative max-desktop:mt-[60px]">
      <h2
        className="font-black text-[80px] text-primary-2 uppercase tracking-wider drop-shadow-text
      max-laptop:text-center max-laptop:text-[60px] max-tablet:text-[30px]"
      >
        Фотографии
      </h2>
      <ul
        className="mt-[75px] max-desktop:mt-[60px] max-tablet:mt-[30px] grid grid-cols-2 gap-[25px] 
        max-laptop:gap-[40px] max-mobile:grid-cols-1"
      >
        {photos.map((photo) => (
          <PhotoCard key={photo.alternativeText} {...photo} />
        ))}
      </ul>
    </div>
  );
};
