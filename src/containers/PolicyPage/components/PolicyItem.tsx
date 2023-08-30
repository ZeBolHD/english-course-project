import { PolicyProps } from "../types";

export const PolicyItem = ({ heading, description }: PolicyProps) => {
  return (
    <li className="mt-[50px] first:mt-0">
      <h5 className="text-[30px] font-normal max-tablet:text-[20px]">
        {heading}
      </h5>
      <p className="text-[20px] max-tablet:text-[16px] max-tablet:mt-[10px] max-mobile:mt-[5px]">
        {description}
      </p>
    </li>
  );
};
