import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <title>Страница не найдена</title>
      <div className="mt-[100px] max-desktop:mt-[60px] text-center">
        <h1
          className="font-bold text-[160px] text-primary-3 drop-shadow-text-orange shadow-primary-2
        max-laptop:text-[130px] max-tablet:text-[100px] max-mobile:text-[60px]"
        >
          404
        </h1>

        <h2
          className="mt-[50px] w-full text-[80px] font-bold uppercase text-primary-2 max-desktop:text-[60px]
          max-laptop:text-[46px] max-tablet:text-[30px] max-mobile:text-[24px] max-mobile:mt-[30px]"
        >
          Ошибка!
          <br />
          Страница не найдена
        </h2>
      </div>
    </>
  );
};

export default NotFound;
