import { Title } from "@/ui/Title";
import { AdvantageCardProps, AdvantagesProps } from "./types";
import { AdvantageCard } from "./AdvantageCard";
import Image from "next/image";

export const Advantages = ({ advantage_cards }: AdvantagesProps) => {
  return (
    <>
      <Title text="Наши преимущества" />
      <div className="relative">
        <Image
          className="absolute top-[50%] right-[10%] translate-y-[-50%]"
          src={"/assets/home-page/advantages/star.svg"}
          width={140}
          height={150}
          alt="star"
        />
        <Image
          className="absolute top-[25%] -right-[50px] translate-y-[-50%]"
          src={"/assets/home-page/advantages/star.svg"}
          width={75}
          height={80}
          alt="star"
        />
        <Image
          className="absolute top-[75%] -right-[115px] translate-y-[-50%]"
          src={"/assets/home-page/advantages/star.svg"}
          width={220}
          height={240}
          alt="star"
        />

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
      </div>
    </>
  );
};
