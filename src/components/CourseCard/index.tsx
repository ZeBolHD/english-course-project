import Link from "next/link";
import { CourseCardProps } from "./types";
import { ListItem } from "./ListItem";

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
    <li
      className="px-[35px] py-[25px] w-[750px] first:mt-0 mt-[100px] even:mr-0 even:ml-auto rounded-[50px] 
    border-[5px] border-primary-3 max-desktop:even:mx-0 max-desktop:w-full max-desktop:px-[60px] 
    max-desktop:py-[30px] max-tablet:py-[20px] max-tablet:mt-[30px] max-tablet:px-[60px] max-mobile:px-[30px]"
    >
      <header
        className="w-full py-[10px] rounded-[50px] bg-primary-3 text-center max-desktop:px-[60px]
      max-mobile:px-[20px] max-mobile:py-[10px]"
      >
        <h3 className="text-white font-normal text-[20px] uppercase max-desktop:text-[30px] max-tablet:text-[18px]">
          {name}
        </h3>
      </header>
      <ul
        className="mt-[20px] font-normal w-full text-[20px] max-tablet:mt-[30px] max-tablet:text-[16px]
      max-mobile:mt-[25px]"
      >
        <ListItem name="Длительность" value={duration} key="Длительность" />
        <ListItem name="Дата старта" value={start} key="Дата старта" />
        <ListItem name="Часы" value={hours} key="Часы" />
        <ListItem name="Стоимость" key="Стоимость">
          <ul>
            <li key="стоимость">
              <p>{price} руб/месяц</p>
            </li>
            <li key="стоимость без налога">
              <p className="text-[#222E79] opacity-50 max-laptop:text-[16px] max-tablet:text-[13px]">
                ({price_taxless} руб с учётом налогового вычета)
              </p>
            </li>
          </ul>
        </ListItem>
        <ListItem name="Языковой уровень" key="Языковой уровень">
          <ul>
            {language_levels.map((level) => (
              <li key={level}>{level}</li>
            ))}
          </ul>
        </ListItem>
        <ListItem
          name="Интенсивность курса"
          value={intensity}
          key="Интенсивность курса"
        />
        <ListItem name="Состав группы" value={persons} key="Состав группы" />
        <li className="mt-[20px]" key="Ссылка на курс">
          <Link
            href={`/courses/${slug}`}
            prefetch={false}
            className="text-primary-3 text-[20px] font-normal max-tablet:text-[16px] underline"
          >
            Подробнее
          </Link>
        </li>
      </ul>
    </li>
  );
};
