import { AdvantageCardProps } from "../../types";

const AdvantageCard = ({ name, items }: AdvantageCardProps) => {
  return (
    <li className="w-full border-[5px] px-[60px] first:border-t-[5px] border-t-0 py-[25px] border-dashed border-primary-3 rounded-[50px]">
      <h3 className="text-[40px] text-primary-3">{name}</h3>
      <ul>
        {items.map((item: string) => {
          return <li className="text-[20px]">{item}</li>;
        })}
      </ul>
    </li>
  );
};

export default AdvantageCard;
