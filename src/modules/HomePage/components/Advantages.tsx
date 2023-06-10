import { AdvantageCardProps } from "../types";

const Advantages = ({
  advantage_cards,
}: {
  advantage_cards: AdvantageCardProps[];
}) => {
  return (
    <div className="mt-[200px]">
      <h2 className="font-black text-[80px] text-center text-primary-1 uppercase tracking-widest drop-shadow-text">
        Наши преимущества
      </h2>
      <ul className="w-full mt-[75px]">
        {advantage_cards.map((card: AdvantageCardProps) => {
          return <li>{card.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Advantages;
