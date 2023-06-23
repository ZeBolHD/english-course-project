import { Title } from "@/ui/Title";
import { ReviewCard } from "./ReviewCard";
import { ReviewsProps } from "./types";

export const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <>
      <Title id="reviews" text="Отзывы" />

      <ul className="columns-2 gap-[25px] block mt-[50px]">
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.name}
              name={review.name}
              text={review.text}
            />
          );
        })}
      </ul>
    </>
  );
};
