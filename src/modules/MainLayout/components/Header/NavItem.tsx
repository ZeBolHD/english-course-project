import Link from "next/link";
import { NavItemProps } from "./types";

export const NavItem = ({
  children,
  type,
  onClick,
  href,
  isDocument,
}: NavItemProps) => {
  const documentProps = isDocument
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  if (type === "button") {
    return (
      <li className="max-tablet:mt-[25px] max-tablet:first:mt-0">
        <button
          onClick={onClick}
          className="max-tablet:px-[30px] max-tablet:py-[10px] 
          max-tablet:flex max-tablet:items-center 
          
          max-tablet:justify-center max-tablet:bg-white
          max-tablet:rounded-[50px] max-tablet:text-[16px]
          max-tablet:w-full"
        >
          {children}
        </button>
      </li>
    );
  }

  return (
    <li className="max-tablet:mt-[25px] max-tablet:first:mt-0">
      <Link
        href={href ? href : "/"}
        prefetch={false}
        onClick={onClick}
        {...documentProps}
        className="max-tablet:px-[30px] max-tablet:py-[10px] 
      max-tablet:flex max-tablet:items-center 
      max-tablet:mt-[30px] max-tablet:first:mt-0
      max-tablet:justify-center max-tablet:bg-white
      max-tablet:rounded-[50px] max-tablet:text-[16px]"
      >
        {children}
      </Link>
    </li>
  );
};
