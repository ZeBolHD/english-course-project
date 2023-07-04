import Image from "next/image";

import { QualitiesProps } from "@/modules/types";

const qualityIcons = [
  "/assets/teachers/uni.svg",
  "/assets/teachers/work.svg",
  "/assets/teachers/lang.svg",
];

export const Qualities = ({ items }: QualitiesProps) => {
  return (
    <ul className="mt-[15px] text-[20px] font-normal max-tablet:text-[16px]">
      {items.map((text: string, index: number) => (
        <li
          className="flex mt-[15px] items-center max-tablet:w-[70%]"
          key={index}
        >
          <Image
            className="min-w-[28px] min-h-[28px] mr-[15px] max-tablet:mr-[10px] "
            src={qualityIcons[index]}
            width={28}
            height={28}
            key={index}
            alt="icon"
          />
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};
