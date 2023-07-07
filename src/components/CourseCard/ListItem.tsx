import { ListItemProps } from "./types";

export const ListItem = ({ name, value, children }: ListItemProps) => {
  return (
    <li
      className="border-b-[1px] py-[6px] last:border-none border-black w-full flex items-center relative 
      font-light min-h-[50px]"
    >
      <h5 className="w-1/2 font-normal">{name}</h5>
      <div className="w-1/2 ml-0 mr-auto">
        {children}
        {value ? <p>{value}</p> : null}
      </div>
    </li>
  );
};
