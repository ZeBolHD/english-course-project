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
    <div className="mt-[100px] relative">
      <h2 className="font-black text-[80px] text-primary-2 uppercase drop-shadow-text">
        {name}
      </h2>

      <div className="mt-[100px] w-[750px] text-[20px] relative">
        <ul>
          <ListItem name="Длительность" value={duration} key="Длительность" />

          <ListItem name="Дата старта" value={start} key="Дата старта" />

          <ListItem name="Часы" value={hours} key="Часы" />

          <ListItem name="Стоимость" key="Стоимость">
            <ul>
              <li key="Налог">
                <p>{price} руб/месяц</p>
              </li>
              <li key="Без налога">
                <p className="text-[#222E79] opacity-60">
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

          <ListItem name="Состав группы" value={persons} key="Состав группы" />
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
          className="absolute -bottom-[50px] -right-[60%] -z-10 w-fit object-contain h-[450px]"
          src={imageURL}
          width={500}
          height={600}
          alt={image.alternativeText}
        />
      </div>

      <ReactMarkdown
        className={`mt-[100px] w-full mb-[50px] ${styles.markdown}`}
      >
        {description}
      </ReactMarkdown>
    </div>
  );
};
