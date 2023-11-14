import React, { memo } from "react";
import { STEPPER_VALUES } from "../../utils/constants";

interface Step {
  number: number;
  name: string;
}

interface SingleStepper {
  number: number;
  name: string;
  currentStep: number;
}

interface Stepper {
  currentStep: number;
}

const SingleStep = ({ number, name, currentStep }: SingleStepper) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`border border-white w-9 h-9 rounded-3xl justify-center items-center flex ${
          number === (currentStep === 5 ? 4 : currentStep)
            ? "border-none bg-active-step-back"
            : "border-solid bg-transparent text-white"
        } `}
      >
        {number}
      </div>
      <div className="hidden sm:hidden md:block lg:block">
        <div className="text-white uppercase text-xs">Step {number}</div>
        <div className="text-white uppercase font-bold text-lg">{name}</div>
      </div>
    </div>
  );
};

const CustomStepper = ({ currentStep }: Stepper) => {
  return (
    <div className="flex top-0 left-0 absolute right-0 sm:flex-row left-0 top-6 sm:right-auto md:top-10 left-0 right-0 lg:flex-col gap-4 justify-center left-0 right-0 xl:left-6 right-0">
      {STEPPER_VALUES.map((item: Step) => {
        const { number, name } = item;
        return (
          <SingleStep
            key={number}
            number={number !== 5 ? number : number - 1}
            name={name}
            currentStep={currentStep}
          />
        );
      })}
    </div>
  );
};

export default memo(CustomStepper);
