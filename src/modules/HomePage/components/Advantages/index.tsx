import { Title } from "@/ui/Title";
import { AdvantageCardProps } from "./types";
import { AdvantageCard } from "./AdvantageCard";

export const Advantages = ({
  advantage_cards,
}: {
  advantage_cards: AdvantageCardProps[];
}) => {
  return (
    <>
      <Title text="Наши преимущества" />
      <ul className="w-full mt-[75px]">
        {advantage_cards.map((card: AdvantageCardProps) => {
          return (
            <AdvantageCard
              name={card.name}
              items={card.items}
              key={card.name}
            />
          );
        })}
      </ul>
    </>
  );
};
