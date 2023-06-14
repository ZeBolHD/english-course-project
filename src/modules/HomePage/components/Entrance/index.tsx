import { EntranceButton } from "@/ui/EntranceButton";
import { Title } from "@/ui/Title";
import Image from "next/image";
import Step from "./Step";
import { StepProps, steps } from "./types";

export const Entrance = () => {
  return (
    <>
      <Title text="Как к нам поступить?" />

      <ul className="mt-[100px] w-full mx-auto flex justify-between">
        {steps.map((step: StepProps, i: number) => {
          return (
            <Step
              logo={step.logo}
              text={step.text}
              key={i}
              marker={i !== steps.length - 1}
            />
          );
        })}
      </ul>

      <div className="mt-[145px] m-auto w-[480px] h-[80px] relative">
        <Image
          className=" absolute -top-[75px] -right-[80px] rotate-180 "
          src={"/assets/home-page/entrance/selection.svg"}
          width={115}
          height={85}
          alt="selection"
        />
        <EntranceButton text="Подать заявку" />
        <Image
          className=" absolute -bottom-[75px] -left-[80px]"
          src={"/assets/home-page/entrance/selection.svg"}
          width={115}
          height={85}
          alt="selection"
        />
      </div>
    </>
  );
};
