import { notFound } from "next/navigation";
import { getFooterData } from "./api";
import { Contacts } from "./Contacts";
import { FooterList } from "./FooterList";
import { Policy } from "./Policy";

export default async function Footer() {
  const footerData = await getFooterData();

  if (!footerData) {
    notFound();
  }

  return (
    <footer className="w-full py-[50px] bg-primary-1  mt-20 text-black">
      <div className="w-large m-auto max-desktop:mx-[35px] max-desktop:w-fit">
        <ul className="flex max-mobile:flex-col">
          <FooterList
            name="Преподаватели"
            items={footerData.teachers}
            key="Преподаватели"
          />
          <FooterList name="Курсы" items={footerData.courses} key="Курсы" />
        </ul>

        <div className="w-full h-[3px] mt-[35px] bg-primary-3 max-tablet:rounded-full" />

        <div
          className="flex justify-between mt-[50px] max-laptop:mt-[40px] max-tablet:mt-[30px]
        max-mobile:flex-col "
        >
          <Contacts contacts={footerData.contacts} />
          <Policy />
        </div>
      </div>
    </footer>
  );
}
