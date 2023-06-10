import { HeroProps } from "../types";

const Hero = ({ text, slogan }: HeroProps) => {
  return (
    <div className="w-full mt-[200px] text-center">
      <p className="text-[20px]">{text}</p>
    </div>
  );
};

export default Hero;
