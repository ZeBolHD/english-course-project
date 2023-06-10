import { ReactSVGElement } from "react";
import { StepProps } from "./types";

const Step = ({ logo, text }: StepProps) => {
  return (
    <li className="flex w-full mt-[120px]  text-[20px] first:mt-0 justify-between items-center">
      <div className="w-[100px] h-[100px]">{logo}</div>
      {typeof text === "object" ? text : <p className="ml-[50px]">{text}</p>}
    </li>
  );
};

export default Step;
