import Link from "next/link";

export const EntranceButton = ({ text }: { text: string }) => {
  return (
    <Link
      href="/admission"
      scroll
      className="w-full h-full flex justify-center text-white text-[30px] font-bold items-center bg-primary-2 uppercase rounded-full"
    >
      {text}
    </Link>
  );
};
