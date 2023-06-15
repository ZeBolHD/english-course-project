import { ReviewCardProps } from "./types";

export const ReviewCard = ({ name, text }: ReviewCardProps) => {
  return (
    <li className="border-[3px] block break-inside-avoid-column w-[560px] rounded-[50px] mt-[25px] first:mt-0 h-fit border-primary-3 px-[60px] py-[30px] text-[20px]">
      <div className="relative">
        <h4 className="uppercase">{name}</h4>
        <div className="absolute mt-[10px] w-full h-[3px] bg-primary-3" />
      </div>
      <p className="mt-[20px]">{text}</p>
    </li>
  );
};
