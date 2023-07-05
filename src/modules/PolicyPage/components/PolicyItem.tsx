import { PolicyProps } from "../types";

export const PolicyItem = ({ heading, description }: PolicyProps) => {
  return (
    <li className="mt-[50px] first:mt-0">
      <h3 className="text-[30px] font-medium max-tablet:text-[20px]">
        {heading}
      </h3>
      <p className="text-[20px] max-tablet:text-[16px] max-tablet:mt-[10px]">
        {description}
      </p>
    </li>
  );
};
