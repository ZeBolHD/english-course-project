import { PolicyItem } from "./components/PolicyItem";
import { PolicyPageProps } from "./types";

export const Policies = ({ policies }: PolicyPageProps) => {
  if (!policies || policies.length === 0) {
    return null;
  }

  return (
    <div className="mt-[100px] relative max-desktop:mt-[60px]">
      <h2
        className="font-black text-[80px] text-primary-3 uppercase drop-shadow-text max-laptop:text-[56px]
        max-desktop:text-[60px]
      max-tablet:text-[30px] max-mobile:text-[26px]"
      >
        Политика конфидациальности
      </h2>
      <ul className="mt-[75px] max-desktop:mt-[60px] max-tablet:mt-[30px]">
        {policies.map((policy) => (
          <PolicyItem
            key={policy.heading}
            heading={policy.heading}
            description={policy.description}
          />
        ))}
      </ul>
    </div>
  );
};
