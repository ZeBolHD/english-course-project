"use client";
import { Title } from "@/ui/Title";
import { QAItem } from "./QAItem";
import { QAProps } from "./types";

export const QAs = ({ qas }: { qas: QAProps[] }) => {
  return (
    <>
      <Title text="Вопросы и ответы" />
      <ul className="mt-[50px]">
        {qas.map((item) => (
          <QAItem
            question={item.question}
            answer={item.answer}
            key={item.question}
          />
        ))}
      </ul>
    </>
  );
};
