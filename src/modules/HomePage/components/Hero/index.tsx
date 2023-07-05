import Image from "next/image";
import { HeroProps } from "./types";

export const Hero = ({ text, slogan }: HeroProps) => {
  if (!text && !slogan) {
    return null;
  }

  return (
    <>
      <div className="text-[20px] text-center relative ">
        <p className="max-tablet:text-[16px] max-tablet:font-light max-mobile:text-left">
          {text}
        </p>
        <div className="w-fit mx-auto mt-[60px] relative max-tablet:mt-[50px]">
          <Image
            className="w-[52px] h-[46px] absolute -top-[35px] left-[-45px] max-mobile:hidden"
            src={"/assets/home-page/hero/hat.svg"}
            width={50}
            height={50}
            alt="hat"
          />
          <h3 className="uppercase z-10 max-mobile:font-normal max-mobile:text-[22px]">
            {slogan}
          </h3>
          <Image
            className="w-[330px] h-[30px] absolute -right-[25px] bottom-[-15px] -z-10
            max-laptop:w-[250px] max-laptop:h-[25px] max-laptop:-bottom-[7px] max-tablet:w-[200px] max-tablet:h-[15px]
            max-tablet:-bottom-[2px] max-tablet:-right-[40px] max-mobile:hidden"
            src={"/assets/home-page/hero/underline.svg"}
            width={300}
            height={50}
            alt="underline"
          />
        </div>
      </div>
    </>
  );
};
