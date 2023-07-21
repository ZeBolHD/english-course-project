import Link from "next/link";
import { NavItem } from "./NavItem";
import { NavMenuProps } from "./types";

export const NavMenu = ({
  closeMenu,
  scrollToPosition,
  scrollToSection,
}: NavMenuProps) => {
  return (
    <>
      <ul
        className="flex w-full justify-between max-tablet:flex-col max-tablet:text-center
        max-tablet:w-fit max-tablet:m-auto max-tablet:mt-[25px] 
        "
      >
        <NavItem
          type="link"
          href={"/teachers"}
          onClick={closeMenu}
          key="teachers"
        >
          преподаватели
        </NavItem>
        <NavItem
          type="link"
          href={"/courses"}
          onClick={closeMenu}
          key="courses"
        >
          курсы
        </NavItem>
        <NavItem
          key="document"
          type="link"
          href={"/api/download/contract"}
          isDocument
          onClick={closeMenu}
        >
          договор
        </NavItem>
        <NavItem
          key="контакты"
          type="button"
          onClick={() => scrollToPosition()}
        >
          контакты
        </NavItem>
      </ul>
      <div
        className="w-full h-[2px] bg-black my-[10px] max-laptop:w-[400px] max-mobile:w-full 
         max-tablet:bg-white max-tablet:rounded-full m-auto max-tablet:h-[3px] 
        max-tablet:my-[30px]
      "
      />
      <ul
        className="flex w-full justify-between max-tablet:flex-col max-tablet:text-center
        max-tablet:w-fit max-tablet:m-auto max-tablet:mt-[25px]"
      >
        <NavItem type="link" key="новости" onClick={closeMenu} href={"/news"}>
          новости
        </NavItem>
        <NavItem
          type="button"
          onClick={() => scrollToSection("#reviews")}
          key="отзывы"
        >
          отзывы
        </NavItem>
        <NavItem
          type="button"
          onClick={() => scrollToSection("#qas")}
          key="вопросы и ответы"
        >
          вопросы и ответы
        </NavItem>
        <NavItem
          type="link"
          href={"/photos"}
          onClick={closeMenu}
          key="фотографии"
        >
          фотографии
        </NavItem>
      </ul>
    </>
  );
};
