import Link from "next/link";
import { NavItem } from "./NavItem";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const NavMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const router = useRouter();
  const pathname = usePathname();

  const changePath = (section: string) => {
    const hash = window.location.hash;

    if (pathname !== "/") {
      router.push("/" + section);
    } else if (hash !== section) {
      window.location.hash = section;
    }
  };

  const scrollToSection = (section: string) => {
    closeMenu();
    document
      .querySelector(`${section}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    changePath(section);
  };

  // useEffect(() => {
  //   const hash = window.location.hash;

  //   if (hash) {
  //     scrollToSection(hash);
  //   }
  // });

  const scrollToPosition = () => {
    closeMenu();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      <ul
        className="flex justify-between max-tablet-vertical:justify-between
        max-tablet-vertical:flex-col max-tablet-vertical:text-center
        max-tablet-vertical:w-fit max-tablet-vertical:m-auto
        max-tablet-vertical:mt-[50px]
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
      <div className="w-full h-[2px] bg-black my-[10px] max-tablet-vertical:hidden"></div>
      <ul
        className="flex justify-between max-tablet-vertical:justify-between
max-tablet-vertical:flex-col max-tablet-vertical:text-center
max-tablet-vertical:w-fit max-tablet-vertical:m-auto max-tablet-vertical:mt-[25px]
"
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
