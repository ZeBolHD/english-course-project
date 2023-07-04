"use client";
import Image from "next/image";

import { Title } from "@/ui/Title";
import { QAItem } from "./QAItem";
import { QAsProps } from "./types";

export const QAs = ({ qas }: QAsProps) => {
  if (!qas || qas.length === 0) {
    return null;
  }

  return (
    <>
      <Title id="qas" text="Вопросы и ответы" />
      <Image
        className="absolute -right-[32%] top-0 -z-10 max-desktop:hidden"
        src="/assets/home-page/qas/spiral.svg"
        width={450}
        height={600}
        alt="spiral"
      />
      <ul className="mt-[50px]">
        {qas.map((item) => (
          <QAItem
            question={item.question}
            answer={item.answer}
            key={item.question}
          />
        ))}
      </ul>
      <Image
        className="absolute -left-[32%] top-[400px] -z-10 scale rotate-180  max-desktop:hidden"
        src="/assets/home-page/qas/spiral.svg"
        width={450}
        height={600}
        alt="spiral"
      />
    </>
  );
};

export default QAs;
