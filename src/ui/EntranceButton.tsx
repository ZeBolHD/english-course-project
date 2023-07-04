import Link from "next/link";

export const EntranceButton = ({ text }: { text: string }) => {
  return (
    <Link
      href="/admission"
      scroll
      prefetch={false}
      className="px-[80px] py-[15px] bg-primary-2 text-white flex items-center font-bold
      uppercase text-[30px] justify-center rounded-[50px] max-tablet:px-[50px] 
      max-laptop:py-[10px] max-laptop:text-[30px] max-tablet:text-[20px] max-tablet:py-[15px]
      max-mobile:px-[30px] max-mobile:py-[20px]"
    >
      {text}
    </Link>
  );
};
