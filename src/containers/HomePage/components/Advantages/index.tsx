import { AdvantagesProps } from "./types";
import { AdvantageCard } from "./AdvantageCard";
import Image from "next/image";

export const Advantages = ({ advantage_cards }: AdvantagesProps) => {
  if (!advantage_cards || advantage_cards.length === 0) {
    return null;
  }

  return (
    <>
      <div className="relative">
        <Image
          className="absolute w-[140px] h-[150px] top-[50%] right-[10%] translate-y-[-50%] max-laptop:hidden"
          src={"/assets/home-page/advantages/star.svg"}
          width={140}
          height={150}
          alt="star"
        />
        <Image
          className="absolute w-[75px] h-[80px] top-[25%] -right-[50px] translate-y-[-50%] max-laptop:hidden"
          src={"/assets/home-page/advantages/star.svg"}
          width={75}
          height={80}
          alt="star"
        />
        <Image
          className="absolute w-[220px] h-[240px] top-[75%] -right-[115px] translate-y-[-50%] max-laptop:hidden"
          src={"/assets/home-page/advantages/star.svg"}
          width={220}
          height={240}
          alt="star"
        />

        <ul
          className="w-full mt-[75px] m-auto max-desktop:w-[760px] max-laptop:w-[700px]
          max-tablet:w-full max-mobile:mt-[25px] max-desktop:mt-[60px] max-tablet:mt-[30px]"
        >
          {advantage_cards.map((card) => {
            return (
              <AdvantageCard
                key={card.name}
                name={card.name}
                items={card.items}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
