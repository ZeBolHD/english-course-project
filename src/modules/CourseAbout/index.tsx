import React from "react";
import { CourseAboutProps } from "./types";
import { ListItem } from "@/ui/CourseCard/ListItem";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";

import styles from "@/ui/Markdown.module.scss";
import { STRAPI_ENDPOINT } from "@/helpers/endpoints";

export const CourseAbout = ({
  name,
  slug,
  image,
  duration,
  start,
  hours,
  price,
  price_taxless,
  language_levels,
  intensity,
  persons,
  books,
  description,
}: CourseAboutProps) => {
  const imageURL = STRAPI_ENDPOINT + image.url;

  return (
    <div className="mt-[100px] relative max-desktop:mt-[60px] w-full">
      <h2
        className="font-black text-[80px] text-primary-2 uppercase drop-shadow-text max-laptop:text-[60px]
      max-tablet:text-[30px]"
      >
        {name}
      </h2>
      <div
        className="mt-[90px] w-full flex flex-col max-desktop:flex-col-reverse max-laptop:mt-[60px] 
        max-tablet:mt-[30px]"
      >
        <div
          className="w-[750px] text-[20px] relative max-desktop:px-[60px] max-desktop:py-[30px]
          max-desktop:border-[3px] max-desktop:border-secondary max-desktop:rounded-[50px]
          max-desktop:w-full max-desktop:mt-[60px] max-laptop:mt-[30px] max-tablet:py-[20px]"
        >
          <ul className="text-[20px] max-laptop:text-[16px]">
            <ListItem name="Длительность" value={duration} key="Длительность" />

            <ListItem name="Дата старта" value={start} key="Дата старта" />

            <ListItem name="Часы" value={hours} key="Часы" />

            <ListItem name="Стоимость" key="Стоимость">
              <ul>
                <li key="Налог">
                  <p>{price} руб/месяц</p>
                </li>
                <li key="Без налога">
                  <p className="text-[#222E79] opacity-60 max-laptop:text-[16px] max-tablet:text-[13px]">
                    {price_taxless} руб с учётом налогового вычета
                  </p>
                </li>
              </ul>
            </ListItem>

            {language_levels.length ? (
              <ListItem name="Языковой уровень" key="Языковой уровень">
                <ul>
                  {language_levels.map((level) => (
                    <li key={level}>
                      <p>{level}</p>
                    </li>
                  ))}
                </ul>
              </ListItem>
            ) : null}

            <ListItem
              name="Интенсивность курса"
              value={intensity}
              key="Интенсивность курса"
            />

            <ListItem
              name="Состав группы"
              value={persons}
              key="Состав группы"
            />
            {books.length ? (
              <ListItem name="Учебное пособие" key="Учебное пособие">
                <ul>
                  {books.map((name) => (
                    <li key={name}>
                      <p>{name}</p>
                    </li>
                  ))}
                  <p className="text-[#222E79] opacity-60">
                    (индивидуально для каждой группы)
                  </p>
                </ul>
              </ListItem>
            ) : null}
          </ul>
          <Image
            className="absolute -bottom-[50px] -right-[60%] -z-10 w-fit object-contain h-[450px]
            max-desktop:hidden"
            src={imageURL}
            width={500}
            height={600}
            alt={image.alternativeText}
          />
        </div>

        <ReactMarkdown
          className={`mt-[90px] text-[20px] align-center max-desktop:mt-0 max-desktop:w-[85%] max-tablet:w-full
          max-desktop:m-auto max-mobile:w-[80%] max-tablet:text-[16px]
          ${styles.markdown}`}
        >
          {description}
        </ReactMarkdown>
      </div>
    </div>
  );
};
