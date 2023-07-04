import { notFound } from "next/navigation";
import { PhotoCard } from "./components/PhotoCard";
import { PhotosPageProps } from "./types";

export const Photos = ({ photos }: PhotosPageProps) => {
  if (!photos || photos.length === 0) {
    notFound();
  }

  return (
    <div className="mt-[100px]">
      <h2 className="font-black text-[80px] text-primary-2 uppercase tracking-wider drop-shadow-text">
        Фотографии
      </h2>
      <ul className="mt-[50px] grid grid-cols-2 gap-[25px]">
        {photos.map((photo) => (
          <PhotoCard key={photo.alternativeText} {...photo} />
        ))}
      </ul>
    </div>
  );
};
