import { ReviewCardProps } from "./types";

export const ReviewCard = ({ name, text }: ReviewCardProps) => {
  return (
    <li
      className="border-[3px] block break-inside-avoid-column w-[560px] rounded-[50px] mt-[25px] first:mt-0 h-fit
     border-primary-3 px-[60px] py-[30px] text-[20px] max-desktop:w-full max-desktop:mt-[50px]
     max-tablet:px-[60px] max-tablet:py-[15px] max-tablet:mt-[30px]"
    >
      <div className="relative">
        <h4 className="uppercase max-tablet:text-[18px] font-normal">{name}</h4>
        <div className="mt-[20px] w-full h-[3px] bg-primary-3 max-tablet:mt-[10px]" />
      </div>
      <p className="mt-[20px] max-tablet:mt-[10px] max-tablet:text-[16px] max-tablet:text-justify">
        {text}
      </p>
    </li>
  );
};
