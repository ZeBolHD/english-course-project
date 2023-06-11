import { CourseCardProps } from "../../types";

export const CourseCard = ({
  name,
  slug,
  duration,
  hours,
  start,
  price,
  price_taxless,
  language_levels,
  intensity,
  persons,
}: CourseCardProps) => {
  return (
    <li className="px-[60px] py-[35px] rounded-[50px]">
      <header className="w-full py-[10px] rounded-[50px]">{name}</header>
    </li>
  );
};
