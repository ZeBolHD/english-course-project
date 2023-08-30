import { titleAddition } from "@/helpers/consts";
import { AdmissionPage } from "@/containers/AdmissionPage";
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
