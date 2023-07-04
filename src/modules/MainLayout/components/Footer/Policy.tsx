import Link from "next/link";

export const Policy = () => {
  return (
    <div className="text-[18px] flex flex-col w-fit  max-tablet:text-[18px] max-mobile:mt-[30px]">
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
          <div>
            <Link
              className="underline text-primary-3"
              href="https://t.me/zebolhd"
              prefetch={false}
              target="_blank"
            >
              developed by
            </Link>
            <span>, </span>
            <Link
              className="underline text-primary-3"
              href="https://t.me/riiinamii"
              prefetch={false}
              target="_blank"
            >
              designed by
            </Link>
            <span>, </span>
            2023
          </div>
        </li>
      </ul>
    </div>
  );
};
