import { InputItemProps } from "../../types";

export const InputItem = ({
  name,
  label,
  register,
  errors,
  type,
  minLength,
  maxLength,
  min,
  max,
  required = true,
  placeholder,
  textarea,
}: InputItemProps) => {
  const minLengthProps = minLength
    ? {
        value: minLength,
        message: `Минимальная длина ${minLength} символов`,
      }
    : 0;

  const maxLengthProps = maxLength
    ? {
        value: maxLength,
        message: `Максимальная длина ${maxLength} символов`,
      }
    : 0;

  const maxProps = max
    ? {
        value: max,
        message: `Максимальное значение ${max}`,
      }
    : 0;

  const minProps = min
    ? {
        value: min,
        message: `Минимальное значение ${min}`,
      }
    : 0;

  return (
    <div className="text-[20px] first:mt-[50px] relative mb-[40px] max-laptop:mt-[25px] max-laptop:first:mt-0">
      <label
        className="flex justify-between items-center max-laptop:flex
        max-laptop:flex-col"
      >
        <h3
          className="w-[300px] text-left font-normal max-laptop:block max-laptop:ml-0 max-laptop:mr-auto
        max-laptop:w-fit max-tablet:text-[16px]"
        >
          {label}
        </h3>

        {textarea ? (
          <textarea
            className={`py-[10px] px-[50px] h-[150px] w-full ml-[50px] border-[1px] rounded-[50px]
        border-primary-3 transition-all duration-300 outline-none shadow-primary-3
          focus:shadow-sm focus:shadow-primary-3 max-laptop:ml-0 max-laptop:mt-[10px]
          max-laptop:px-[40px] max-tablet:text-[16px]`}
            {...register(name, {
              required: required && "Поле обязательно к заполнению",
              min: minProps,
              max: maxProps,
              minLength: minLengthProps,
              maxLength: maxLengthProps,
            })}
          />
        ) : (
          <input
            className={`py-[10px] px-[50px] w-full ml-[50px] border-[1px] rounded-[50px]
        border-primary-3 transition-all duration-300 outline-none shadow-primary-3
          focus:shadow-sm focus:shadow-primary-3 max-laptop:ml-0 max-laptop:mt-[10px]
          max-laptop:px-[40px] max-tablet:text-[16px]
          ${errors[name] && "border-red-500"}`}
            placeholder={placeholder}
            type={type}
            {...register(name, {
              required: required && "Поле обязательно к заполнению",
              min: minProps,
              max: maxProps,
              minLength: minLengthProps,
              maxLength: maxLengthProps,
            })}
          />
        )}

        <div className="absolute left-0 -bottom-[25px] text-[16px] max-tablet:text-[13px]">
          {errors[name] && <p>{errors[name]?.message}</p>}
        </div>
      </label>
    </div>
  );
};
