export const HomePageItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="mt-[250px] w-full relative max-desktop:mt-[120px] max-tablet:mt-[80px]
    max-mobile:mt-[75px]"
    >
      {children}
    </section>
  );
};
