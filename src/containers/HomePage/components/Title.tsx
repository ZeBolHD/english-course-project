import { TitleProps } from "../types";

export const Title = ({ text, id }: TitleProps) => {
  return (
    <h2
      id={id}
      className="font-black text-[80px] text-center text-primary-1 uppercase tracking-wider drop-shadow-text
      max-desktop:text-[60px] max-tablet:text-[34px]"
    >
      {text}
    </h2>
  );
};
