"use client";

import { useForm } from "react-hook-form";
import { InputItem } from "./components/Input";
import { onSubmit } from "./actions";
import { Candidate } from "./types";

export const AdmissionPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Candidate>({
    mode: "onBlur",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[50px] w-full px-[40px] py-[40px] text-center   border-[3px] border-primary-3 rounded-[50px]"
    >
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
  );
};
