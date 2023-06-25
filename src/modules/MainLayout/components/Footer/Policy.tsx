import Link from "next/link";

export const Policy = () => {
  return (
    <div className="text-[18px] flex flex-col w-[330px]">
      <ul>
        <li key={"policy1"}>
          <Link href="/policy" prefetch={false}>
            Политика конфиденциальности
          </Link>
        </li>

        <li className="mt-[10px]" key={"policy2"}>
          <Link href="/policy" prefetch={false}>
            Пользовательское соглашение
          </Link>
        </li>
        <li className="mt-[10px]" key={"madeBy"}>
          <Link href="https://t.me/zebolhd" prefetch={false} target="_blank">
            Сайт сделан
          </Link>
        </li>
      </ul>
    </div>
  );
};
