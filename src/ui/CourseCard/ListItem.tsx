import { ListItemProps } from "./types";

export const ListItem = ({ name, value, children }: ListItemProps) => {
  return (
    <li className="border-b-[1px] py-[6px] last:border-none border-black w-full flex items-center relative min-h-[50px]">
      <h5 className="w-[300px]">{name}</h5>
      {children}
      {value ? <p>{value}</p> : null}
    </li>
  );
};
