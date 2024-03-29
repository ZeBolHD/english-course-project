import { BannerProps } from "./types";
import Image from "next/image";
import { EntranceButton } from "@/components/EntranceButton";

export const Banner = ({ text }: BannerProps) => {
  if (!text) {
    return null;
  }

  return (
    <section
      className="flex mt-[75px] justify-between 
      max-laptop:justify-normal max-tablet:mt-[30px] max-mobile:mt-[40px]"
    >
      <div>
        <Image
          className="absolute top-[15px] left-0 -translate-x-[20%] w-[400px] h-[500px] -z-40 max-desktop:hidden"
          src={"/assets/home-page/banner/lines-left.svg"}
          width={250}
          height={370}
          alt="lines-left"
        />

        <Image
          className="absolute w-[600px] h-[600px] top-[440px] -right-[100px] -z-40 max-desktop:hidden"
          src={"/assets/home-page/hero/lines-right.svg"}
          width={600}
          height={600}
          alt="lines-right"
        />

        <div
          className="w-[800px] h-[350px] relative animate-appear-bottom rounded-[50px] leading-[150%]
          px-[65px] flex items-center font-normal text-[40px] text-white bg-primary-3 max-desktop:rounded-[30px]
          max-desktop:text-[30px] max-desktop:px-[55px] max-desktop:py-[30px] max-desktop:w-[750px] max-desktop:h-fit
          max-laptop:w-[600px] max-tablet:text-[20px] max-tablet:w-fit max-tablet:px-[50px] max-tablet:py-[25px]
          max-mobile:px-[30px] max-mobile:py-[20px]"
        >
          <h1 className="uppercase">{text}</h1>
        </div>
        <div
          className="flex h-fit mt-[75px] max-desktop:mt-[50px] items-center max-tablet:mt-[30px] 
        max-mobile:justify-center max-mobile:mt-[50px]"
        >
          <EntranceButton text="Записаться" />

          <Image
            className="ml-[40px] w-[110px] h-[110px] max-laptop:w-[100px] max-laptop:h-[100px] max-tablet:w-[75px]
            max-tablet:h-[75px] max-mobile:hidden"
            src={"/assets/home-page/banner/arrow.svg"}
            width={160}
            height={160}
            alt="arrow"
            key="arrow"
          />
        </div>
      </div>
      <div className="w-fit text-center relative max-laptop:w-full max-mobile:hidden animate-appear-right">
        <ul className="max-laptop:justify-center">
          <li key="letter-w1">
            <Image
              className="mx-auto mb-[30px] w-[155px] h-[153px] animate-wiggle-slow max-laptop:w-[110px] 
              max-laptop:h-[110px] max-tablet:w-[90px] max-tablet:h-[90px]"
              src={"/assets/home-page/banner/letter-w1.svg"}
              width={160}
              height={160}
              alt="letter-w1"
              key="letter-w1"
            />
          </li>
          <li key="letter-o">
            <Image
              className="mx-auto mb-[15px] w-[112px] h-[149px] animate-wiggle-rev max-laptop:w-[110px] 
              max-laptop:h-[110px] max-tablet:w-[90px] max-tablet:h-[90px]"
              src={"/assets/home-page/banner/letter-o.svg"}
              width={160}
              height={160}
              alt="letter-o"
              key="letter-o"
            />
          </li>
          <li key="letter-w2">
            <Image
              className="mx-auto w-[167px] h-[141px] animate-wiggle-rev max-laptop:w-[110px] 
              max-laptop:h-[110px] max-tablet:w-[90px] max-tablet:h-[90px]"
              src={"/assets/home-page/banner/letter-w2.svg"}
              width={160}
              height={160}
              alt="letter-w2"
              key="letter-w2"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
