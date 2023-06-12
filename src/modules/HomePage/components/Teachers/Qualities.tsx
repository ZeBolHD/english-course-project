import { icons, QualitiesProps } from "./types";

export const Qualities = ({ items }: QualitiesProps) => {
  return (
    <ul className="mt-[15px] text-[20px] font-normal">
      {items.map((text: string, index: number) => (
        <li className="flex mt-[15px] items-center" key={index}>
          <div className="min-w-[28px] min-h-[28px] mr-[15px]" key={index}>
            {icons[index]}
          </div>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};
