import { Title } from "@/ui/Title";
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
    </>
  );
};
