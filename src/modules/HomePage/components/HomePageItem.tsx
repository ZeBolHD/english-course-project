import { Title } from "@/modules/HomePage/components/Title";
import { HomePageItemProps } from "../types";

export const HomePageItem = ({ title, children, id }: HomePageItemProps) => {
  return (
    <section
      className="mt-[250px] w-full relative max-desktop:mt-[120px] max-tablet:mt-[80px]
      max-mobile:mt-[75px]"
    >
      {title ? <Title text={title} id={id} /> : null}
      {children}
    </section>
  );
};
