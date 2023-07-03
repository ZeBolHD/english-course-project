export const NavItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li
      className="max-tablet:w-[250px] max-tablet:h-[50px] 
      max-tablet:flex max-tablet:items-center 
      max-tablet:mt-[25px] max-tablet:first:mt-0
      max-tablet:justify-center max-tablet:bg-white
      max-tablet:rounded-[50px]
      "
    >
      {children}
    </li>
  );
};
