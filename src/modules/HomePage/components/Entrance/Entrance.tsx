import Step from "./Step";
import { StepProps, steps } from "./types";

const Entrance = () => {
  return (
    <div className="text-center mt-[150px] relative">
      <h2 className="uppercase text-[40px]">Как к нам поступить?</h2>
      {/* <svg
        className="relative"
        width="737"
        height="713"
        viewBox="0 0 737 713"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_221_218)">
          <path
            d="M714.982 11.1338C714.982 11.1338 8.99987 -22.2576 9 129.339C9.00017 325.869 719.103 185.624 714.982 340.42C710.861 495.216 45.5509 410.98 45.5509 577.676C45.5509 744.372 714.982 686.172 714.982 686.172"
            stroke="black"
            strokeWidth="17"
            strokeLinecap="round"
            strokeDasharray="150 150"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_221_218"
            x="0.5"
            y="0.0219727"
            width="736"
            height="712.408"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="13" dy="8" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.933333 0 0 0 0 0.2 0 0 0 0 0.188235 0 0 0 0.8 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_221_218"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_221_218"
              result="shape"
            />
          </filter>
        </defs>
      </svg> */}

      <ul className="mt-[165px] w-[400px] mx-auto">
        {steps.map((step: StepProps) => {
          return <Step logo={step.logo} text={step.text} />;
        })}
      </ul>
    </div>
  );
};

export default Entrance;
