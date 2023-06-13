import { icons } from "@/modules/HomePage/components/Teachers/types";
import Link from "next/link";
import { Contact, contactIcons, ContactsProps } from "./types";

export const Contacts = ({ contacts }: ContactsProps) => {
  return (
    <div>
      <h4 className="font-bold text-[20px]">Контакты</h4>
      <ul className="flex mt-[15px]">
        {contacts.map((contact: Contact) => {
          return (
            <li className="ml-[30px] first:ml-0">
              <Link href={contact.link}>
                <div className="w-[40px] h-[40px]">
                  {contactIcons[contact.name]}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
