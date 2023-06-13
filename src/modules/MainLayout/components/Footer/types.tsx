export interface FooterListItemProps {
  name: string;
  slug: string;
}

export interface Contact {
  link: string;
  name: "vk" | "whatsApp" | "telegram";
}

export interface ContactsProps {
  contacts: Contact[];
}

export interface FooterProps {
  teachers: FooterListItemProps[];
  courses: FooterListItemProps[];
  contacts: Contact[];
}

export const contactIcons = {
  vk: (
    <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.2354 0.18457H14.4521C2.77708 0.18457 0 2.96165 0 14.6158V27.3992C0 39.0721 2.75625 41.8512 14.4313 41.8512H27.2146C38.8875 41.8512 41.6667 39.095 41.6667 27.42V14.6367C41.6667 2.96165 38.9104 0.18457 27.2354 0.18457ZM33.6375 29.9137H30.5979C29.4479 29.9137 29.1021 28.9825 27.0396 26.92C25.2396 25.1846 24.4792 24.9679 24.0229 24.9679C23.3938 24.9679 23.2208 25.1408 23.2208 26.0096V28.7429C23.2208 29.4825 22.9813 29.9158 21.05 29.9158C19.1757 29.7899 17.3582 29.2204 15.7471 28.2544C14.136 27.2884 12.7774 25.9535 11.7833 24.3596C9.42327 21.4221 7.78113 17.9744 6.9875 14.2908C6.9875 13.8346 7.16042 13.4221 8.02917 13.4221H11.0667C11.8479 13.4221 12.1292 13.77 12.4354 14.5721C13.9104 18.9137 16.4271 22.6887 17.4479 22.6887C17.8396 22.6887 18.0104 22.5158 18.0104 21.5387V17.0679C17.8813 15.0283 16.7979 14.8554 16.7979 14.1179C16.8118 13.9234 16.901 13.7419 17.0464 13.612C17.1919 13.4821 17.3822 13.414 17.5771 13.4221H22.3521C23.0042 13.4221 23.2208 13.7471 23.2208 14.5283V20.5617C23.2208 21.2137 23.5021 21.4304 23.6979 21.4304C24.0896 21.4304 24.3917 21.2137 25.1083 20.4971C26.6476 18.6199 27.9053 16.5285 28.8417 14.2887C28.9374 14.0197 29.1185 13.7894 29.3574 13.6329C29.5962 13.4764 29.8797 13.4024 30.1646 13.4221H33.2042C34.1146 13.4221 34.3083 13.8783 34.1146 14.5283C33.0094 17.0042 31.6418 19.3545 30.0354 21.5387C29.7083 22.0387 29.5771 22.2992 30.0354 22.8846C30.3375 23.3408 31.4021 24.2304 32.1188 25.0762C33.1602 26.1151 34.0251 27.317 34.6792 28.6346C34.9396 29.4804 34.5042 29.9137 33.6375 29.9137Z"
        fill="black"
      />
    </svg>
  ),
  whatsApp: (
    <svg viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36.0832 6.24719C34.1732 4.31787 31.8981 2.78817 29.3908 1.7473C26.8834 0.706433 24.1938 0.175237 21.479 0.184694C10.104 0.184694 0.833171 9.45553 0.833171 20.8305C0.833171 24.4764 1.7915 28.018 3.58317 31.143L0.666504 41.8514L11.604 38.9764C14.6248 40.6222 18.0207 41.4972 21.479 41.4972C32.854 41.4972 42.1248 32.2264 42.1248 20.8514C42.1248 15.3305 39.979 10.143 36.0832 6.24719ZM21.479 37.9972C18.3957 37.9972 15.3748 37.1639 12.729 35.6014L12.104 35.2264L5.604 36.9347L7.33317 30.6014L6.9165 29.9555C5.20347 27.22 4.29388 24.0581 4.2915 20.8305C4.2915 11.3722 11.9998 3.66386 21.4582 3.66386C26.0415 3.66386 30.354 5.45553 33.5832 8.70553C35.1821 10.2971 36.4492 12.1902 37.3111 14.2752C38.1729 16.3601 38.6124 18.5953 38.604 20.8514C38.6457 30.3097 30.9373 37.9972 21.479 37.9972ZM30.8957 25.1639C30.3748 24.9139 27.8332 23.6639 27.3748 23.4764C26.8957 23.3097 26.5623 23.2264 26.2082 23.7264C25.854 24.2472 24.8748 25.4139 24.5832 25.7472C24.2915 26.1014 23.979 26.143 23.4582 25.8722C22.9373 25.6222 21.2707 25.0597 19.3123 23.3097C17.7707 21.9347 16.7498 20.2472 16.4373 19.7264C16.1457 19.2055 16.3957 18.9347 16.6665 18.6639C16.8957 18.4347 17.1873 18.0597 17.4373 17.768C17.6873 17.4764 17.7915 17.2472 17.9582 16.9139C18.1248 16.5597 18.0415 16.268 17.9165 16.018C17.7915 15.768 16.7498 13.2264 16.3332 12.1847C15.9165 11.1847 15.479 11.3097 15.1665 11.2889H14.1665C13.8123 11.2889 13.2707 11.4139 12.7915 11.9347C12.3332 12.4555 10.9998 13.7055 10.9998 16.2472C10.9998 18.7889 12.854 21.2472 13.104 21.5805C13.354 21.9347 16.7498 27.143 21.9165 29.3722C23.1457 29.9139 24.104 30.2264 24.854 30.4555C26.0832 30.8514 27.2082 30.7889 28.104 30.6639C29.104 30.518 31.1665 29.4139 31.5832 28.2055C32.0207 26.9972 32.0207 25.9764 31.8748 25.7472C31.729 25.518 31.4165 25.4139 30.8957 25.1639Z"
        fill="black"
      />
    </svg>
  ),
  telegram: (
    <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.9583 0.18457C9.45833 0.18457 0.125 9.5179 0.125 21.0179C0.125 32.5179 9.45833 41.8512 20.9583 41.8512C32.4583 41.8512 41.7917 32.5179 41.7917 21.0179C41.7917 9.5179 32.4583 0.18457 20.9583 0.18457ZM30.625 14.3512C30.3125 17.6429 28.9583 25.6429 28.2708 29.3304C27.9792 30.8929 27.3958 31.4137 26.8542 31.4762C25.6458 31.5804 24.7292 30.6846 23.5625 29.9137C21.7292 28.7054 20.6875 27.9554 18.9167 26.7887C16.8542 25.4346 18.1875 24.6846 19.375 23.4762C19.6875 23.1637 25.0208 18.3096 25.125 17.8721C25.1395 17.8058 25.1375 17.737 25.1194 17.6717C25.1012 17.6063 25.0674 17.5464 25.0208 17.4971C24.8958 17.3929 24.7292 17.4346 24.5833 17.4554C24.3958 17.4971 21.4792 19.4346 15.7917 23.2679C14.9583 23.8304 14.2083 24.1221 13.5417 24.1012C12.7917 24.0804 11.375 23.6846 10.3125 23.3304C9 22.9137 7.97917 22.6846 8.0625 21.9554C8.10417 21.5804 8.625 21.2054 9.60417 20.8096C15.6875 18.1637 19.7292 16.4137 21.75 15.5804C27.5417 13.1637 28.7292 12.7471 29.5208 12.7471C29.6875 12.7471 30.0833 12.7887 30.3333 12.9971C30.5417 13.1637 30.6042 13.3929 30.625 13.5596C30.6042 13.6846 30.6458 14.0596 30.625 14.3512Z"
        fill="black"
      />
    </svg>
  ),
};
