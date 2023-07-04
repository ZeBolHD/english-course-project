import { AdvantageCardProps } from "./types";

export const AdvantageCard = ({ name, items }: AdvantageCardProps) => {
  return (
    <li
      className="w-full border-[5px] px-[60px] first:border-t-[5px] border-t-0 py-[25px] border-dashed 
    border-primary-3 rounded-[50px] max-desktop:rounded-[30px] max-desktop:py-[30px] max-tablet:w-full
    max-tablet:px-[60px] max-tablet:py-[20px]"
    >
      <h3 className="text-[40px] font-normal text-primary-3 max-desktop:text-[24px] max-tablet:text-[20px]">
        {name}
      </h3>
      <ul className="mt-[20px]">
        {items.map((item: string, index: number) => {
          return (
            <li
              className="text-[20px] first:mt-0 lowercase max-desktop:mt-[15px] max-tablet:text-[16px]"
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </li>
  );
};
