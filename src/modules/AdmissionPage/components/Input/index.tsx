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
    <div className="text-[20px] first:mt-[50px] relative mb-[40px]">
      <label className="flex justify-between items-center">
        {label}

        <input
          className={`py-[10px] px-[50px] w-[700px] ml-[50px] border-[1px] rounded-[50px]
          border-primary-3 transition-all duration-300 outline-none shadow-primary-3
            focus:shadow-sm focus:shadow-primary-3 ${
              errors[name] && "border-red-500"
            }`}
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

        <div className="absolute left-0 top-10 text-[16px]">
          {errors[name] && <p>{errors[name]?.message}</p>}
        </div>
      </label>
    </div>
  );
};
