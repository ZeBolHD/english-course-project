import { PolicyProps } from "../types";

export const PolicyItem = ({ heading, description }: PolicyProps) => {
  return (
    <li className="text-[20px] mt-[50px] first:mt-0">
      <h2 className="text-[34px] font-medium">{heading}</h2>
      <p>{description}</p>
    </li>
  );
};
