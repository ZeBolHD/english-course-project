import Image from "next/image";
import { StepProps } from "./types";

const Step = ({ logo, text, marker }: StepProps) => {
  return (
    <li className="w-[250px] text-[20px] text-center justify-between fill-primary-2 relative">
      <Image
        className="w-[100px] h-[100px] m-auto"
        src={logo}
        height={100}
        width={100}
        alt="icon"
      />
      <div className="mt-[25px]">
        {typeof text === "object" ? text : <p>{text}</p>}
      </div>
      {marker ? (
        <Image
          className="w-[140px] h-[70px] absolute -right-[175px] top-1/2 -translate-y-1/2"
          src="/assets/home-page/entrance/arrow.svg"
          width={140}
          height={70}
          alt="arrow"
        />
      ) : null}
    </li>
  );
};

export default Step;
