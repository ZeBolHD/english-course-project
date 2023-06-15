import { BannerProps } from "./types";
import Image from "next/image";
import { EntranceButton } from "@/ui/EntranceButton";

export const Banner = ({ text }: BannerProps) => {
  return (
    <section className="flex mt-[75px]  overflow-x-hidden">
      <div>
        <Image
          className="absolute top-[15px] left-0 -translate-x-[20%] w-[400px] h-[500px] -z-40"
          src={"/assets/home-page/banner/lines-left.svg"}
          width={250}
          height={370}
          alt="lines-left"
        />

        <Image
          className="absolute w-[600px] h-[600px] top-[440px] -right-[100px] -z-40"
          src={"/assets/home-page/hero/lines-right.svg"}
          width={600}
          height={600}
          alt="lines-right"
        />

        <div
          className="w-[800px] h-[350px] mb-[65px] 
        relative animate-appear
        rounded-[50px] px-[65px] flex items-center font-normal text-[40px] text-white bg-primary-3"
        >
          <h1 className="uppercase">{text}</h1>
        </div>
        <div className="flex h-[125px] items-center">
          <div className="w-[350px] h-[75px] text-center">
            <EntranceButton text="Записаться" />
          </div>
          <Image
            className="ml-[40px] w-[110px] h-[107px]"
            src={"/assets/home-page/banner/arrow.svg"}
            width={160}
            height={160}
            alt="arrow"
            key="arrow"
          />
        </div>
      </div>
      <div className="w-full text-center relative">
        <ul>
          <li className="mx-auto mb-[30px] w-[155px] h-[153px] animate-wiggle-slow">
            <Image
              src={"/assets/home-page/banner/letter-w1.svg"}
              width={160}
              height={160}
              alt="letter-w1"
              key="letter-w1"
            />
          </li>
          <li className="mx-auto mb-[15px] w-[112px] h-[149px] animate-wiggle-rev">
            <Image
              src={"/assets/home-page/banner/letter-o.svg"}
              width={160}
              height={160}
              alt="letter-o"
              key="letter-o"
            />
          </li>
          <li className="mx-auto w-[167px] h-[141px] animate-wiggle-rev">
            <Image
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
