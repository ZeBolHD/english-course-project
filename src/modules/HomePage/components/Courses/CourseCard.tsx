import Link from "next/link";
import { ReactNode } from "react";
import { CourseCardProps } from "../../types";
import { ListElement } from "./ListElement";

export const CourseCard = ({
  name,
  slug,
  duration,
  hours,
  start,
  price,
  price_taxless,
  language_levels,
  intensity,
  persons,
}: CourseCardProps) => {
  return (
    <li className="px-[35px] py-[25px] w-[750px] first:mt-0 mt-[100px] even:mr-0 even:ml-auto rounded-[50px] border-[5px] border-primary-3">
      <header className="w-full py-[10px] rounded-[50px] bg-primary-3 text-center">
        <h3 className="text-white font-normal text-[20px] uppercase">{name}</h3>
      </header>
      <ul className="mt-[20px] font-normal w-full text-[20px]">
        <ListElement name="Длительность" value={duration} />
        <ListElement name="Дата старта" value={start} />
        <ListElement name="Часы" value={hours} />
        <ListElement name="Стоимость">
          <ul>
            <li>
              <p>{price} руб/месяц</p>
            </li>
            <li>
              <p className="text-[#222E79] opacity-60">
                {price_taxless} руб с учётом налогового вычета
              </p>
            </li>
          </ul>
        </ListElement>
        <ListElement name="Языковой уровень">
          <ul>
            {language_levels.map((level: string, i: number) => (
              <li key={i}>{level}</li>
            ))}
          </ul>
        </ListElement>
        <ListElement name="Интенсивность курса" value={intensity} />
        <ListElement name="Состав группы" value={persons} />
        <li className="mt-[25px]">
          <Link href={`/courses/${slug}`}>Подробнее</Link>
        </li>
      </ul>
    </li>
  );
};
