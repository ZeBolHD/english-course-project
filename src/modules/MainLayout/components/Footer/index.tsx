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
      <div className="w-large m-auto">
        <ul className=" flex">
          <FooterList name="Преподаватели" items={footerData.teachers} />
          <FooterList name="Курсы" items={footerData.courses} />
        </ul>

        <div className="w-full h-[3px] mt-[35px] bg-primary-3" />

        <div className="flex justify-between mt-[50px]">
          <Contacts contacts={footerData.contacts} />
          <Policy />
        </div>
      </div>
    </footer>
  );
}
