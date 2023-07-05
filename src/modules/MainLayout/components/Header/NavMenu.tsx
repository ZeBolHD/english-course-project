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
        <NavItem type="link" href={"/teachers"} onClick={closeMenu}>
          преподаватели
        </NavItem>
        <NavItem type="link" href={"/courses"} onClick={closeMenu}>
          курсы
        </NavItem>
        <NavItem
          type="link"
          href={"/api/download/contract"}
          onClick={closeMenu}
        >
          договор
        </NavItem>
        <NavItem type="button" onClick={() => scrollToPosition()}>
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
        <NavItem type="button" onClick={() => scrollToSection("#reviews")}>
          отзывы
        </NavItem>
        <NavItem type="button" onClick={() => scrollToSection("#qas")}>
          вопросы и ответы
        </NavItem>
        <NavItem type="button" href={"/photos"} onClick={closeMenu}>
          фотографии
        </NavItem>
      </ul>
    </>
  );
};
