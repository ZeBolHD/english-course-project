import Image from "next/image";
import Link from "next/link";
import { Contact, ContactsProps } from "./types";

const contactIcons = {
  vk: "/assets/layout/footer/vk.svg",
  tg: "/assets/layout/footer/tg.svg",
  wa: "/assets/layout/footer/wa.svg",
};

export const Contacts = ({ contacts }: ContactsProps) => {
  return (
    <div>
      <h4 className="font-normal uppercase text-[20px] max-tablet:text-[18px]">
        Контакты
      </h4>
      <ul className="flex mt-[15px]">
        {contacts.map((contact: Contact) => {
          return (
            <li className="ml-[30px] first:ml-0" key={contact.name}>
              <Link href={contact.link} prefetch={false} target="_blank">
                <div className="w-[40px] h-[40px]">
                  <Image
                    src={contactIcons[contact.name]}
                    width={40}
                    height={40}
                    alt="contact-icon"
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
