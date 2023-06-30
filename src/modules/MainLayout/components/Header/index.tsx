"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { NavMenu } from "./NavMenu";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const pathname = usePathname();

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
    setTimeout(() => {
      setIsMenuOpened(false);
    }, 0);
  };

  useEffect(() => {
    closeMenu();

    if (pathname === pathname) {
      closeMenu();
    }
  }, [pathname]);

  return (
    <header
      className={`h-[100px] m-auto w-large max-tablet:w-[95%] mt-[25px] max-tablet-vertical:w-[100vw]`}
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
        className={`h-full w-full m-auto rounded-[50px] px-[60px] max-tablet:px-[35px] text-black flex items-center justify-between max-tablet:w-[95%]
          max-tablet-vertical:flex-col max-tablet-vertical:justify-normal max-tablet-vertical:px-[40px] max-tablet-vertical:left-[2.5%]
        max-tablet-vertical:py-[15px] max-tablet-vertical:absolute z-50
         bg-primary-1 ${
           isMenuOpened
             ? "max-tablet-vertical:h-[100vh] max-tablet-vertical:w-[100vw] max-tablet-vertical:top-0 max-tablet-vertical:left-[0] max-tablet-vertical:rounded-none"
             : "max-tablet-vertical:h-fit"
         }`}
      >
        <motion.div
          layout="position"
          className="flex items-center justify-between w-full"
        >
          <Link href={"/"} prefetch={false} onClick={closeMenu}>
            <h1
              className="uppercase text-[24px] w-[300px] max-tablet-vertical:text-[40px] max-tablet-vertical:w-[400px] max-mobile:text-[26px]
            max-mobile:w-fit max-tablet:w-[250px]
            "
            >
              Центр языковой подготовки НХТИ
            </h1>
          </Link>
          <button
            className="h-[70px] w-[70px] tablet-vertical:hidden"
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

        <nav className="w-[750px] text-[18px] max-tablet-vertical:hidden max-tablet:w-[800px]">
          <NavMenu closeMenu={closeMenu} />
        </nav>

        <AnimatePresence>
          {isMenuOpened ? (
            <motion.nav
              className="w-[750px] text-[18px] max-tablet-vertical:w-full
            tablet-vertical:hidden
            "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ dur: 0.3, height: 0, margin: 0, opacity: 0 }}
            >
              <NavMenu closeMenu={closeMenu} />
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Header;
