import { AdvantageCardProps } from "./types";

export const AdvantageCard = ({ name, items }: AdvantageCardProps) => {
  return (
    <li className="w-full border-[5px] px-[60px] first:border-t-[5px] border-t-0 py-[25px] border-dashed border-primary-3 rounded-[50px]">
      <h3 className="text-[40px] text-primary-3">{name}</h3>
      <ul>
        {items.map((item: string, index: number) => {
          return (
            <li className="text-[20px]" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </li>
  );
};
