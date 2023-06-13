"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[100px] w-large m-auto mt-[25px]  rounded-[50px] px-[60px] bg-primary-1 text-black flex items-center justify-between">
      <div>
        <Link href={"/"}>
          <h1 className="uppercase text-[24px] w-[300px]">
            Центр языковой подготовки НХТИ
          </h1>
        </Link>
      </div>
      <nav className="w-[600px]">
        <ul className="flex justify-between after:">
          <li>
            <Link href={"/teachers"}>Преподаватели</Link>
          </li>
          <li>
            <Link href={"/"}>Курсы</Link>
          </li>
          <li>
            <Link href={"/"}>Договор</Link>
          </li>
          <li>
            <Link href={"/"}>Контакты</Link>
          </li>
        </ul>
        <div className="w-full h-[2px] bg-black my-[10px]"></div>
        <ul className="flex justify-between after:">
          <li>
            <Link href={"/"}>Отзывы</Link>
          </li>
          <li>
            <Link href={"/"}>Вопросы и ответы</Link>
          </li>
          <li>
            <Link href={"/"}>Фотографии</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
