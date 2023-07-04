import Image from "next/image";
import { StepProps } from "./types";

const Step = ({ logo, text }: StepProps) => {
  return (
    <li className="w-[250px] text-[20px] text-center justify-between fill-primary-2 relative max-tablet:m-auto">
      <Image
        className="w-[100px] h-[100px] m-auto max-tablet:w-[60px] max-tablet:h-[60px]"
        src={logo}
        height={100}
        width={100}
        alt="icon"
      />
      <div className="mt-[25px] max-tablet:text-[16px]">
        {typeof text === "object" ? text : <p>{text}</p>}
      </div>
    </li>
  );
};

export default Step;
