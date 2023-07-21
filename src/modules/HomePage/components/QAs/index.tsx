"use client";
import Image from "next/image";

import { QAItem } from "./QAItem";
import { QAsProps } from "./types";

export const QAs = ({ qas }: QAsProps) => {
  if (!qas || qas.length === 0) {
    return null;
  }

  return (
    <ul className="mt-[75px] max-desktop:mt-[60px] max-tablet:mt-[30px]">
      {qas.map((item) => (
        <QAItem
          key={item.question}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </ul>
  );
};

export default QAs;
