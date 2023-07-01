"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { NavMenu } from "./NavMenu";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpened) {
      setIsMenuOpened(false);

      document.body.style.overflowY = "auto";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflowY = "hidden";

      setIsMenuOpened(true);
    }
  };

  const closeMenu = () => {
    document.body.style.overflowY = "auto";
    setIsMenuOpened(false);

    // Для имитации загрузки страницы
    // setTimeout(() => {
    //   setIsMenuOpened(false);
    // }, 350);
  };

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
      .querySelector(section)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    changePath(section);
  };

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      scrollToSection(hash);
    }
  });

  const scrollToPosition = () => {
    closeMenu();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <header
      className={`h-[100px] m-auto w-large max-tablet:w-[95%] mt-[25px] max-tablet-vertical:h-[150px] max-mobile:h-[125px]`}
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
        className={`h-full w-full m-auto rounded-[50px] px-[60px] max-tablet:px-[35px] text-black flex items-center 
        justify-between max-tablet-vertical:flex-col max-tablet-vertical:justify-normal max-tablet-vertical:px-0 
        max-tablet-vertical:py-[15px] max-tablet-vertical:absolute z-50 transform-gpu left-0 
         bg-primary-1 ${
           isMenuOpened
             ? `max-tablet-vertical:h-[100vh] max-tablet-vertical:w-[100%] max-mobile:w-[100%] max-tablet-vertical:top-0 
                right-0 left-0 max-tablet-vertical:rounded-none`
             : "max-tablet-vertical:h-fit left-[2.5%] max-tablet-vertical:w-[95%]"
         }`}
      >
        <motion.div
          layout="position"
          className="flex items-center justify-between w-full max-tablet-vertical:px-[40px] max-mobile:px-[25px]"
        >
          <Link href={"/"} prefetch={false} onClick={closeMenu}>
            <h1
              className="uppercase text-[24px] w-[300px] max-tablet-vertical:text-[30px] max-tablet-vertical:w-fit 
              max-mobile:text-[24px] max-mobile:w-fit max-tablet:w-[250px] 
            "
            >
              Центр языковой
              <br />
              подготовки НХТИ
            </h1>
          </Link>
          <button
            className="h-[65px] w-[65px] tablet-vertical:hidden max-mobile:h-[55px] max-mobile:w-[55px]"
            onClick={() => toggleMenu()}
          >
            <Image
              className="w-full h-full"
              src="/assets/layout/header/menu.svg"
              alt="menu"
              width={75}
              height={75}
            />
          </button>
        </motion.div>

        <nav className="w-full text-[18px] max-tablet-vertical:hidden ">
          <NavMenu
            closeMenu={closeMenu}
            scrollToPosition={scrollToPosition}
            scrollToSection={scrollToSection}
          />
        </nav>

        <AnimatePresence>
          {isMenuOpened ? (
            <motion.nav
              className="w-[750px] text-[18px] max-tablet-vertical:w-full
            tablet-vertical:hidden "
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
