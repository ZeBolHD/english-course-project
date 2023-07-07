import { PageContainerProps } from "./types";

export const PageContainer = ({
  title,
  isInnerPage,
  innerPageTitleColor,
  children,
}: PageContainerProps) => {
  return (
    <div className="mt-[100px] relative max-desktop:mt-[60px] max-mobile:mt-[40px]">
      {isInnerPage ? (
        <h2
          className={`font-black text-[80px] uppercase drop-shadow-text max-laptop:text-[60px]
          max-tablet:text-[30px] ${innerPageTitleColor}`}
        >
          {title}
        </h2>
      ) : (
        <h2
          className="font-black text-[80px] text-primary-2 uppercase tracking-wider drop-shadow-text
          max-laptop:text-[60px] max-tablet:text-[30px] max-laptop:text-center"
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};
