import Step from "./Step";
import { StepProps, steps } from "./types";

export const Entrance = () => {
  return (
    <div className="text-center mt-[200px] w-full relative">
      <h2 className="font-black text-[80px] text-center text-primary-1 uppercase tracking-normal drop-shadow-text">
        Как к нам поступить?
      </h2>

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
    </div>
  );
};
