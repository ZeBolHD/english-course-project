"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { InputItem } from "./components/Input";
import { sendAdmission } from "./actions";
import { Candidate } from "./types";
import Image from "next/image";

export const AdmissionPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Candidate>({
    mode: "onBlur",
  });

  const [status, setStatus] = useState("");
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (data: Candidate) => {
    const status = await sendAdmission(data);

    setStatus(status);
    setIsSent(true);
  };

  if (!isSent) {
    return (
      <div className="mt-[75px] w-full px-[40px] py-[40px] text-center   border-[3px] border-primary-3 rounded-[50px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-primary-1 font-bold text-[40px]">
            Оставьте заявку и приходите на <br /> собеседование!
          </h1>
          <div className="text-[20px] mt-[50px] relative">
            <InputItem
              name="fullNameParent"
              label="ФИО родителя полностью"
              register={register}
              errors={errors}
              placeholder="Иванов Иван Иванович"
            />

            <InputItem
              name="fullNameChild"
              label="ФИО ребёнка полностью"
              register={register}
              errors={errors}
              placeholder="Иванов Иван Иванович"
            />

            <InputItem
              name="phoneParent"
              label="Телефон родителя"
              register={register}
              errors={errors}
              type="number"
              placeholder="89672451099"
              min={79000000000}
              max={79999999999}
              // required={false}
            />

            <InputItem
              name="email"
              label="Почта родителя"
              register={register}
              errors={errors}
              type="email"
              placeholder="test@test.ru"
            />

            <InputItem
              name="school"
              label="Школа"
              register={register}
              errors={errors}
              type="number"
              min={1}
              max={100}
              placeholder="10"
            />

            <InputItem
              name="grade"
              label="Класс"
              register={register}
              errors={errors}
              type="number"
              min={1}
              max={11}
              placeholder="4"
            />

            <InputItem
              name="mark"
              label="Оценка в школе"
              register={register}
              errors={errors}
              type="number"
              max={5}
              min={2}
              placeholder="4"
            />

            <InputItem
              name="comment"
              label="Ваши вопросы или комментарии"
              register={register}
              errors={errors}
              required={false}
            />
          </div>
          <button
            type="submit"
            className="uppercase flex items-center justify-center m-auto text-white text-[30px] bg-primary-2 py-[15px] px-[35px] rounded-[50px]"
          >
            Оставить заявку
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="h-[450px] w-[450px] mt-[75px] m-auto rounded-[50px] border-primary-3 border-[3px] flex items-center flex-col justify-center">
      {status === "success" ? (
        <>
          <Image
            className="w-[200px] h-[200px]"
            src="/assets/admission/success.svg"
            width={200}
            height={200}
            alt="success"
          />
          <h2 className="text-[24px] mt-[75px]">Заявка отправлена</h2>
        </>
      ) : (
        <h2 className="text-[24px] mt-[75px] text-center">
          Произошла ошибка, попробуйте позже
        </h2>
      )}
    </div>
  );
};
