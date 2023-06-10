import Image from "next/image";
import { BannerProps } from "../../types";
import Arrow from "./Arrow";
import LetterO from "./LetterO";
import LetterW1 from "./LetterW1";
import LetterW2 from "./LetterW2";

export const Banner = ({ text }: BannerProps) => {
  return (
    <div className="flex mt-[75px]">
      <div>
        <div className="w-[800px] h-[350px] mb-[65px] rounded-[50px] px-[65px] flex items-center font-normal text-[40px] text-white bg-primary-bg">
          <h1 className="uppercase">{text}</h1>
        </div>
        <div className="flex h-[125px] items-center">
          <button className="w-[350px] h-[75px] rounded-[80px] bg-primary-2 font-bold text-white text-[30px]">
            Записаться
          </button>
          <Arrow />
        </div>
      </div>
      <div className="w-full text-center">
        <ul>
          <li className="mx-auto mb-[30px] w-[155px] h-[153px] animate-wiggle-slow">
            <LetterW1 />
          </li>
          <li className="mx-auto mb-[15px] w-[112px] h-[149px] animate-wiggle-rev">
            <LetterO />
          </li>
          <li className="mx-auto w-[167px] h-[141px] animate-wiggle-rev">
            <LetterW2 />
          </li>
        </ul>
      </div>
    </div>
  );
};
