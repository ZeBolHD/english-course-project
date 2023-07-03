import Image from "next/image";
import { StepProps } from "./types";

const Step = ({ logo, text }: StepProps) => {
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
    </li>
  );
};

export default Step;
