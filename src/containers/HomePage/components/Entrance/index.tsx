import { EntranceButton } from "@/components/EntranceButton";
import Image from "next/image";
import Step from "./Step";
import { StepProps, steps } from "./types";

export const Entrance = () => {
  return (
    <>
      <ul
        className="mt-[100px] w-full mx-auto flex justify-between max-tablet:flex-col max-tablet:justify-normal
      max-tablet:mt-[30px]"
      >
        {steps.map((step: StepProps, i: number) => {
          return (
            <div key={i}>
              <Step logo={step.logo} text={step.text}/>
              <Image
                className="last:hidden w-[140px] h-[70px] my-auto
                 max-desktop:w-[90px] max-desktop:h-[90px] max-tablet:w-[70px] max-tablet:h-[70px]
                 max-tablet:rotate-90 max-tablet:mx-auto max-tablet:my-[30px]"
                src="/assets/home-page/entrance/arrow.svg"
                width={140}
                height={70}
                alt="arrow"
              />
            </div>
          );
        })}
      </ul>

      <div className="mt-[145px] m-auto w-fit h-[80px] relative max-tablet:mt-[120px] max-mobile:mt-[75px]">
        <Image
          className=" absolute -top-[75px] -right-[80px] rotate-180 max-mobile:h-[65px] max-mobile:w-[65px]
          max-mobile:-top-[50px] max-mobile:-right-[50px]"
          src={"/assets/home-page/entrance/selection.svg"}
          width={115}
          height={85}
          alt="selection"
        />
        <EntranceButton text="Подать заявку" />
        <Image
          className=" absolute -bottom-[75px] -left-[80px] max-mobile:h-[65px] max-mobile:w-[65px]
          max-mobile:-bottom-[50px] max-mobile:-left-[50px]"
          src={"/assets/home-page/entrance/selection.svg"}
          width={115}
          height={85}
          alt="selection"
        />
      </div>
    </>
  );
};
