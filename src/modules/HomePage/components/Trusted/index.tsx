import { STRAPI_ENDPOINT } from "@/helpers/endpoints";
import { Title } from "@/ui/Title";
import Image from "next/image";
import { TrustedProps } from "./types";

export const Trusted = ({ companies }: TrustedProps) => {
  return (
    <>
      <Image
        className="absolute w-[300px] h-[150px] -right-[100px] -top-[50px]"
        src="/assets/home-page/trusted/pattern.svg"
        width={300}
        height={150}
        alt="pattern1"
      />
      <Title text="Нам доверяют" />
      <ul className="grid grid-cols-3 gap-[50px] mt-[100px] justify-between w-full">
        {companies.map((item) => {
          const imageURL = STRAPI_ENDPOINT + item.url;

          return (
            <li
              className="h-[60px] flex justify-center"
              key={item.alternativeText}
            >
              <Image
                className="h-full w-fit object-fill "
                src={imageURL}
                width={400}
                height={60}
                alt={item.alternativeText}
              />
            </li>
          );
        })}
      </ul>
      <Image
        className="absolute w-[160px] h-[100px] -left-[125px] -bottom-[100px] rotate-180"
        src="/assets/home-page/trusted/pattern.svg"
        width={160}
        height={100}
        alt="pattern1"
      />
    </>
  );
};
