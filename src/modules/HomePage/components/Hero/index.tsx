import Image from "next/image";
import { HeroProps } from "./types";

export const Hero = ({ text, slogan }: HeroProps) => {
  if (!text && !slogan) {
    return null;
  }

  return (
    <>
      <div className="text-[20px] text-center relative ">
        <p>{text}</p>
        <div className="w-fit mx-auto mt-[60px] relative">
          <Image
            className="w-[52px] h-[46px] absolute top-[-35px] left-[-45px]"
            src={"/assets/home-page/hero/hat.svg"}
            width={50}
            height={50}
            alt="hat"
          />
          <h3 className="uppercase z-10">{slogan}</h3>
          <Image
            className="w-[350px] h-[30px] absolute right-[-25px] bottom-[-15px] -z-10"
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
