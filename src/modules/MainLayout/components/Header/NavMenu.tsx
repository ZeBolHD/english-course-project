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
        max-tablet:w-fit max-tablet:m-auto max-tablet:mt-[50px] 
        "
      >
        <NavItem>
          <Link href={"/teachers"} prefetch={false} onClick={closeMenu}>
            преподаватели
          </Link>
        </NavItem>
        <NavItem>
          <Link href={"/courses"} prefetch={false} onClick={closeMenu}>
            курсы
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href={"/api/download/contract"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            договор
          </Link>
        </NavItem>
        <NavItem>
          <button onClick={() => scrollToPosition()}>контакты</button>
        </NavItem>
      </ul>
      <div className="w-full h-[2px] bg-black my-[10px] max-laptop:min-w-[400px] max-tablet:hidden "></div>
      <ul
        className="flex w-full justify-between max-tablet:flex-col max-tablet:text-center
        max-tablet:w-fit max-tablet:m-auto max-tablet:mt-[25px]"
      >
        <NavItem>
          <button onClick={() => scrollToSection("#reviews")}>отзывы</button>
        </NavItem>
        <NavItem>
          <button onClick={() => scrollToSection("#qas")}>
            вопросы и ответы
          </button>
        </NavItem>
        <NavItem>
          <Link href={"/photos"} onClick={closeMenu}>
            фотографии
          </Link>
        </NavItem>
      </ul>
    </>
  );
};
