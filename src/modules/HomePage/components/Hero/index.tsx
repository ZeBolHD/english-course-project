import { HeroProps } from "./types";

export const Hero = ({ text, slogan }: HeroProps) => {
  return (
    <>
      <div className="text-[20px] text-center">
        <p>{text}</p>
        <div className="w-fit mx-auto mt-[60px] relative">
          <svg
            className="w-[52px] h-[46px] absolute top-[-35px] left-[-45px]"
            viewBox="0 0 52 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.544 21.011C20.544 21.011 35.3792 31.9526 33.8957 34.141C32.4122 36.3293 13.8682 30.4937 13.1264 31.9526C12.0138 34.141 21.2858 39.2471 20.544 41.4354C19.8023 43.6237 2 42.8943 2 42.8943"
              stroke="#FEA7DC"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M37 2.01099L50 25.011"
              stroke="#FEA7DC"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <h3 className="uppercase z-10">{slogan}</h3>
          <svg
            className="w-[350px] h-[30px] absolute right-[-25px] bottom-[-15px] -z-10"
            viewBox="0 0 353 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0787 28.3159C15.6243 26.2083 -2.71127 8.82103 0.344167 5.65966C3.39995 2.49792 354.384 -1.1946 349.813 0.390763C346.774 1.44446 354.066 24.5999 352.865 25.1546C348.3 27.2621 12.5332 30.4236 14.0787 28.3159Z"
              fill="#FEA7DC"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
