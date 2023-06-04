import Image from "next/image";
import { BannerProps } from "../types";

export const Banner = ({ text }: BannerProps) => {
  return (
    <div>
      <div style={{ backgroundImage: `url("/banner.png")` }}></div>
      {text}
    </div>
  );
};
