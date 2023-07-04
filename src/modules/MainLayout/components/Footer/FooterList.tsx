import Link from "next/link";
import { FooterListItemProps } from "./types";

export const FooterList = ({
  name,
  items,
}: {
  name: string;
  items: FooterListItemProps[];
}) => {
  return (
    <li className="ml-[100px] first:ml-0">
      <h4 className="font-bold text-[20px] max-tablet:text-[18px]">{name}</h4>
      <ul>
        {items.map((item) => (
          <li
            className="text-[20px] mt-[10px]  max-tablet:text-[16px]"
            key={item.name}
          >
            <Link href={item.slug} prefetch={false}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
