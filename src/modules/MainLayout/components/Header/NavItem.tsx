export const NavItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li
      className="max-tablet-vertical:w-[250px] max-tablet-vertical:h-[50px] 
      max-tablet-vertical:flex max-tablet-vertical:items-center 
      max-tablet-vertical:mt-[25px] max-tablet-vertical:first:mt-0
      max-tablet-vertical:justify-center max-tablet-vertical:bg-white
      max-tablet-vertical:rounded-[50px]
      "
    >
      {children}
    </li>
  );
};
