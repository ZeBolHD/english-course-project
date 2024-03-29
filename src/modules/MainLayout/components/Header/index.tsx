"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useCallback, useEffect, useState } from "react";

import { NavMenu } from "./NavMenu";
import { usePathname, useRouter } from "next/navigation";
import useMenu from "./helpers/useMenu";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { isMenuOpened, toggleMenu, closeMenu } = useMenu();

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
      .querySelector(section)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    changePath(section);
  };

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      scrollToSection(hash);
    }
  }, [pathname]);

  const scrollToPosition = () => {
    closeMenu();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <header
      className="h-fit m-auto w-large max-desktop:w-[95%] mt-[25px] max-tablet:w-[85%] max-tablet:h-[85px]
      max-mobile:w-[90%] "
    >
      <motion.div
        layout
        transition={{
          layout: {
            duration: 1,
            type: "spring",
            damping: 30,
            stiffness: 400,
          },
        }}
        className={`h-full w-full m-auto rounded-[50px] max-desktop:rounded-[30px] px-[55px] py-[20px] text-black 
        flex items-center justify-between max-laptop:px-[55px] max-laptop:py-[12px] max-tablet:px-[50px]
        max-tablet:py-[15px] max-mobile:px-[25px] max-tablet:flex-col max-tablet:justify-normal
        max-tablet:absolute z-50
         bg-primary-1 ${
           isMenuOpened
             ? `max-tablet:h-[100vh] max-tablet:w-[100%] max-tablet:top-0 
                left-0 max-tablet:rounded-none`
             : "max-tablet:h-fit max-tablet:w-[85%] max-mobile:w-[90%] transform"
         }`}
      >
        <motion.div
          layout="position"
          className="flex items-center  w-full max-tablet:justify-between "
        >
          <Link href={"/"} prefetch={false} onClick={closeMenu}>
            <h1
              className="uppercase text-[30px] max-laptop:text-[24px] max-tablet:text-[20px] max-mobile:text-[18px]
                max-laptop:font-medium max-tablet:font-medium"
            >
              Центр языковой
              <br />
              подготовки НХТИ
            </h1>
          </Link>
          <button
            className={`h-[45px] w-[45px] hidden max-tablet:block fill-white`}
            onClick={() => toggleMenu()}
          >
            {isMenuOpened ? (
              <Image
                className="w-full h-full fill-white"
                src="/assets/layout/header/close.svg"
                alt="menu"
                width={75}
                height={75}
              />
            ) : (
              <Image
                className="w-full h-full fill-white"
                src="/assets/layout/header/menu.svg"
                alt="menu"
                width={75}
                height={75}
              />
            )}
          </button>
        </motion.div>

        <nav className="w-full text-[18px] font-light max-tablet:hidden">
          <NavMenu
            closeMenu={closeMenu}
            scrollToPosition={scrollToPosition}
            scrollToSection={scrollToSection}
          />
        </nav>

        <AnimatePresence>
          {isMenuOpened ? (
            <motion.nav
              className="w-fit text-[18px] tablet:hidden max-tablet:w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ dur: 0.3, height: 0, margin: 0, opacity: 0 }}
            >
              <NavMenu
                closeMenu={closeMenu}
                scrollToPosition={scrollToPosition}
                scrollToSection={scrollToSection}
              />
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Header;
