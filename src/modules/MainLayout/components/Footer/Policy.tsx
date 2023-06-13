import Link from "next/link";

export const Policy = () => {
  return (
    <div className="text-[18px] flex flex-col w-[330px]">
      <ul>
        <li>
          <Link href={"/policy"}>Политика конфиденциальности</Link>
        </li>

        <li className="mt-[10px]">
          <Link href={"/policy"}>Пользовательское соглашение</Link>
        </li>
        <li className="mt-[10px]">© NCHTI, 2023</li>
      </ul>
    </div>
  );
};
