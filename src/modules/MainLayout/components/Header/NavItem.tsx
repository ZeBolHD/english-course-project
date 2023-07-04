export const NavItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li
      className="max-tablet:px-[30px] max-tablet:py-[10px] 
      max-tablet:flex max-tablet:items-center 
      max-tablet:mt-[30px] max-tablet:first:mt-0
      max-tablet:justify-center max-tablet:bg-white
      max-tablet:rounded-[50px] max-tablet:text-[16px]
      "
    >
      {children}
    </li>
  );
};
