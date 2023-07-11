import { titleAddition } from "@/helpers/types";
import { AdmissionPage } from "@/modules/AdmissionPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оставить заявку" + titleAddition,
  description:
    "Лицензированные курсы английского языка в Нижнекамске. Подготовка к ОГЭ, ЕГЭ.",
};

const Admission = () => {
  return <AdmissionPage />;
};

export default Admission;
