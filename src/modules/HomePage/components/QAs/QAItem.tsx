import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QAItemProps } from "./types";
import Image from "next/image";

export const QAItem = ({ question, answer }: QAItemProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <motion.li
      layout
      transition={{
        layout: { duration: 1, type: "spring", damping: 27, stiffness: 400 },
      }}
      className={`py-[20px] px-[60px] mt-[25px] first:mt-0 border-[3px] 
      border-primary-2 rounded-[50px] text-[20px] bg-white font-normal max-tablet:text-[16px]
      max-tablet:px-[30px] max-tablet:py-[20px]`}
    >
      <motion.div
        layout="position"
        className={`flex justify-between items-center ${
          isOpened ? "mb-[15px]" : ""
        }`}
      >
        <h4 className="">{question}</h4>
        <Image
          className={`w-[50px] h-[50px] transition cursor-pointer select-none max-tablet:h-[40px] max-tablet:w-[40px] ${
            isOpened ? "rotate-45" : ""
          }`}
          src="/assets/home-page/qas/button.svg"
          width={50}
          height={50}
          alt="button"
          onClick={handleClick}
        />
      </motion.div>
      <AnimatePresence>
        {isOpened ? (
          <motion.p
            initial={{ opacity: 0, margin: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ height: 0, opacity: 0 }}
          >
            {answer}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </motion.li>
  );
};
