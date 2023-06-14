import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QAProps } from "./types";

export const QAItem = ({ question, answer }: QAProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <motion.li
      layout
      transition={{
        layout: { duration: 1, type: "spring", damping: 30, stiffness: 400 },
      }}
      className={`py-[20px] px-[60px] mt-[25px] first:mt-0 border-[3px] 
      border-primary-2 rounded-[50px] text-[20px]
      `}
    >
      <motion.div layout="position" className="flex justify-between">
        <h4 className="font-normal ">{question}</h4>
        <svg
          onClick={handleClick}
          className={`w-[30px] h-[30px] ml-[60px] cursor-pointer duration-200 ${
            isOpened ? "rotate-45" : "rotate-0"
          }`}
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.19092 1.58689L10.6222 21.3994C10.6784 22.1806 13.1034 21.6744 13.0347 20.7494L11.6097 0.943138C11.5534 0.161888 9.12842 0.668138 9.19717 1.59314L9.19092 1.58689Z"
            fill="#FF6613"
          />
          <path
            d="M1.48902 13.2317C7.90778 12.2942 14.3453 11.4317 20.789 10.6567C21.2078 10.6067 22.0953 10.3567 22.164 9.83797C22.2328 9.31922 21.4703 9.28172 21.1203 9.31922C14.6765 10.0942 8.24528 10.9567 1.82028 11.8942C1.40153 11.9567 0.514025 12.188 0.445275 12.713C0.376525 13.238 1.13902 13.2817 1.48902 13.2317Z"
            fill="#FF6613"
          />
        </svg>
      </motion.div>
      <AnimatePresence>
        {isOpened ? (
          <motion.p
            className="mt-[20px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ height: 0, margin: 0, opacity: 0 }}
          >
            {answer}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </motion.li>
  );
};
