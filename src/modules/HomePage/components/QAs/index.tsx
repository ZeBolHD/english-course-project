import { Title } from "@/ui/Title";
import { QAItem } from "./QAItem";
import { QAProps } from "./types";

export const QAs = ({ qas }: { qas: QAProps[] }) => {
  return (
    <div>
      <Title text="Вопросы и ответы" />
      <ul>
        {qas.map((item: QAProps) => {
          <QAItem />;
        })}
      </ul>
    </div>
  );
};
