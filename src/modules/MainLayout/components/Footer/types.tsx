export interface FooterListItemProps {
  name: string;
  slug: string;
}

export interface Contact {
  link: string;
  name: "vk" | "wa" | "tg";
}

export interface ContactsProps {
  contacts: Contact[];
}

export interface FooterProps {
  teachers: FooterListItemProps[];
  courses: FooterListItemProps[];
  contacts: Contact[];
}
