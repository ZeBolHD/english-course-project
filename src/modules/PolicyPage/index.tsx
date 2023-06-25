import { PolicyItem } from "./components/PolicyItem";
import { PolicyPageProps } from "./types";

export const Policies = ({ policies }: PolicyPageProps) => {
  return (
    <div className="mt-[100px]">
      <h2 className="font-black text-[80px] text-primary-2 uppercase tracking-wider drop-shadow-text">
        Политика конфидациальности
      </h2>
      <ul className="mt-[50px]">
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
