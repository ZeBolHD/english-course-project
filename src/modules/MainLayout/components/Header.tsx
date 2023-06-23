"use client";

import { NEXT_PUBLIC_STRAPI_UPLOADS_ENDPOINT } from "@/helpers/endpoints";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (section: string) => {
    document
      .querySelector(`${section}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    const hash = window.location.hash;

    if (pathname !== "/") {
      router.push("/" + section);
    } else if (hash !== section) {
      window.location.hash = section;
    }
  };

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      scrollToSection(hash);
    }
  });

  const scrollToPosition = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <header className="h-[100px] w-large m-auto mt-[25px]  rounded-[50px] px-[60px] bg-primary-1 text-black flex items-center justify-between">
      <div>
        <Link href={"/"} prefetch={false}>
          <h1 className="uppercase text-[24px] w-[300px]">
            Центр языковой подготовки НХТИ
          </h1>
        </Link>
      </div>
      <nav className="w-[600px] text-[18px]">
        <ul className="flex justify-between">
          <li>
            <Link href={"/teachers"} prefetch={false}>
              преподаватели
            </Link>
          </li>
          <li>
            <button onClick={() => scrollToSection("#courses")}>курсы</button>
          </li>
          <li>
            <Link
              href={`${NEXT_PUBLIC_STRAPI_UPLOADS_ENDPOINT}/Dogovor_83e2998bdb.doc`}
            >
              договор
            </Link>
          </li>
          <li>
            <button onClick={() => scrollToPosition()}>контакты</button>
          </li>
        </ul>
        <div className="w-full h-[2px] bg-black my-[10px]"></div>
        <ul className="flex justify-between">
          <li>
            <Link href="/reviews">отзывы</Link>
          </li>
          <li>
            <button onClick={() => scrollToSection("#qas")}>
              вопросы и ответы
            </button>
          </li>
          <li>
            <Link href={"/"}>фотографии</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
