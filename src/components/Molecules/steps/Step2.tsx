import React, { useState } from "react";
import { z } from "zod";
import Layout from "../../../Layout/Layout";
import Footer from "../Footer";
import { PLAN_OPTIONS } from "../../../utils/constants";
import { AntSwitch } from "../../Atoms/AntSwitch";

interface StepType {
  setCurrentStep: (value: number) => void;
  selectedPlan: string;
  setSelectedPlan: (e: string) => void;
  selectedPlanName: { name: string; amount: number };
  setSelectedPlanName: (e: { name: string; amount: number }) => void;
}

interface SingleCardType {
  name: string;
  amount: number;
  index: number;
  activePlan: number;
  setActivePlan: (e: number) => void;
  icon: string;
  setSelectedPlanName: (e: { name: string; amount: number }) => void;
}

const Schema = z.object({
  name: z.string().min(1, "Cannot be empty"),
  phone: z.string().min(1, "Cannot be empty"),
  email: z.string().min(1, "Cannot be empty"),
});

const SingleCard = ({
  name,
  amount,
  index,
  icon,
  activePlan,
  setActivePlan,
  setSelectedPlanName,
}: SingleCardType) => {
  return (
    <div
      key={index}
      onClick={() => {
        setSelectedPlanName({ name, amount });
        setActivePlan(index + 1);
      }}
      className={`border border-solid border-gray-shade-3 cursor-pointer rounded-lg w-full h-auto w-full ${
        index + 1 === activePlan
          ? "bg-selected-plane-bg border-gray-shade-4"
          : "bg-white-500 border-gray-shade-4"
      } border-gray-shade-4 hover:border-selected-hover-border flex flex-row gap-4 items-center p-4 sm:flex sm:flex-col sm:flex-1 sm:h-52 sm:justify-around sm:items-baseline`}
    >
      <img src={icon} alt="logo" className="w-14 h-14 lg:w-16 h-16" />
      <div>
        <div className="font-bold mb-1">{name}</div>
        <div className="text-gray-shade-1 text-xs">{`$${amount}/mon`}</div>
      </div>
    </div>
  );
};

const Step2 = ({
  setCurrentStep,
  selectedPlan,
  setSelectedPlan,
  selectedPlanName,
  setSelectedPlanName,
}: StepType) => {
  const [activePlan, setActivePlan] = useState<number>(1);

  return (
    <Layout>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col bg-background-shade sm:bg-white">
          <div className="flex shadow-2xl sm:shadow-none flex-1 flex-col m-4 p-6 rounded mt-[-100px] sm:mt-[-200px] md:mt-[-300px] lg:mt-[0px] xl:mt-[0px] bg-white">
            <div className="text-3xl font-bold text-purple-shade-1 mb-2">
              Select your Plan
            </div>
            <div className="text-base text-gray-shade-2 mb-6">
              you have the option of monthly or yearly billing.
            </div>
            <div className="flex flex-col gap-10 lg:flex-row">
              {PLAN_OPTIONS.map((item, index) => {
                return (
                  <SingleCard
                    {...item}
                    index={index}
                    activePlan={activePlan}
                    setActivePlan={setActivePlan}
                    setSelectedPlanName={setSelectedPlanName}
                  />
                );
              })}
            </div>
            <div className="flex items-center gap-2 justify-center mt-8 p-6 bg-selected-plane-bg">
              <div
                className={`font-bold ${
                  selectedPlan === "monthly"
                    ? "text-purple-shade-1"
                    : "text-gray-shade-5"
                }`}
              >
                Monthly
              </div>
              <AntSwitch
                inputProps={{ "aria-label": "ant design" }}
                onChange={(e) => {
                  setSelectedPlan(
                    selectedPlan === "monthly" ? "yearly" : "monthly"
                  );
                }}
              />
              <div
                className={`font-bold ${
                  selectedPlan === "yearly"
                    ? "text-purple-shade-1"
                    : "text-gray-shade-5"
                }`}
              >
                Yearly
              </div>
            </div>
          </div>
          <Footer
            canGoBack
            onBackPress={() => setCurrentStep(1)}
            onNextPress={() => setCurrentStep(3)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Step2;
