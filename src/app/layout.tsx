import "./globals.css";
import { Rubik } from "next/font/google";
import MainLayout from "@/modules/MainLayout/MainLayout";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Курсы по английскому языку НХТИ",
  description:
    "Лицензированные курсы английского языка в Нижнекамске. Подготовка к ОГЭ, ЕГЭ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
