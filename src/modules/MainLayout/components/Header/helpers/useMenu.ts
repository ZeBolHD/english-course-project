import { useState } from "react";

const useMenu = () => {
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
    // document.body.style.overflowY = "auto";
    // setIsMenuOpened(false);

    // Для имитации загрузки страницы
    setTimeout(() => {
      document.body.style.overflowY = "auto";
      setIsMenuOpened(false);
    }, 350);
  };

  return {
    isMenuOpened,
    toggleMenu,
    closeMenu,
  };
};

export default useMenu;
