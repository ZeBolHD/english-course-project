import Link from "next/link";

export const steps = [
  {
    logo: "/assets/home-page/entrance/test.svg",
    text: (
      <>
        <p>Ребёнок проходит тестирование на сайте:</p>
        <Link
          className=" text-primary-3"
          target="_blank"
          href={"https://www.englishtag.com/tests/level_test.asp"}
        >
          Пройти тестирование
        </Link>
      </>
    ),
  },
  {
    logo: "/assets/home-page/entrance/application.svg",
    text: "Родитель оформляет заявку на поступление, ответив на вопросы",
  },
  {
    logo: "/assets/home-page/entrance/done.svg",
    text: "Готово! Приходите на собеседование",
  },
];

export interface StepProps {
  logo: string;
  text: string | React.ReactNode;
}
