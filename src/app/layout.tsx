import "./globals.css";
import { Rubik } from "next/font/google";
import MainLayout from "@/modules/MainLayout";
import { Metadata } from "next";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Курсы английского языка в Нижнекамске",
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
      <head>
        <meta
          name="google-site-verification"
          content="h24PMH9ZRsS6Ai5c7hCWG7AZevZ6-WPZnyBpBeDiO8o"
        />
        <meta name="yandex-verification" content="e0545a9208754590" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${rubik.className} overflow-x-hidden`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
