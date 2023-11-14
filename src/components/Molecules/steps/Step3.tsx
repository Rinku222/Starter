import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Layout from "../../../Layout/Layout";
import Footer from "../Footer";
import { ADD_ONS } from "../../../utils/constants";

interface StepType {
  setCurrentStep: (value: number) => void;
  selectedPlan: string;
  setSelectedAddOns: (e: string[]) => void;
  selectedAddOns: string[];
}

interface SingleAddOnType {
  name: string;
  description: string;
  setSelectedAddOns: (e: string[]) => void;
  selectedAddOns: string[];
  index: number;
  selectedPlan: string;
  amount: number;
}

const SingleAddOn = ({
  name,
  description,
  amount,
  setSelectedAddOns,
  selectedAddOns,
  index,
  selectedPlan,
}: SingleAddOnType) => {
  const handleChange = () => {
    const local = [...selectedAddOns];
    const value = selectedAddOns?.[index];

    if (value) {
      local[index] = "";
      setSelectedAddOns(local);
    } else {
      local[index] = name;
      setSelectedAddOns(local);
    }
  };

  return (
    <div
      className={`flex flex-row justify-between p-4 mb-6 items-center rounded-lg border border-solid ${
        selectedAddOns.filter((s) => s === name)?.length
          ? "border-purple-shade-1 bg-selected-plane-bg"
          : "border-gray-shade-2 bg-white-500"
      }`}
    >
      <div className="flex flex-row gap-4">
        <Checkbox
          checked={Boolean(selectedAddOns.filter((s) => s === name)?.length)}
          onChange={handleChange}
        />
        <div>
          <div className="font-bold text-purple-shade-1">{name}</div>
          <div className="text-xs text-gray-shade-6">{description}</div>
        </div>
      </div>
      <div className="text-price-color">
        +${selectedPlan === "monthly" ? `${amount}/mon` : `${amount * 10}/yr`}
      </div>
    </div>
  );
};

const Step3 = ({
  setCurrentStep,
  selectedPlan,
  selectedAddOns,
  setSelectedAddOns,
}: StepType) => {
  return (
    <Layout>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col bg-background-shade sm:bg-white">
          <div className="flex flex-1 shadow-2xl sm:shadow-none flex-col m-4 p-6 rounded mt-[-100px] sm:mt-[-200px] md:mt-[-300px] lg:mt-[0px] xl:mt-[0px] bg-white">
            <div className="text-3xl font-bold text-purple-shade-1 mb-2">
              Pick add-ons
            </div>
            <div className="text-base text-gray-shade-2 mb-6">
              Add-ons help enhance your gaming experience
            </div>
            {ADD_ONS.map((item, index) => (
              <SingleAddOn
                key={item.name}
                {...item}
                selectedAddOns={selectedAddOns}
                setSelectedAddOns={setSelectedAddOns}
                index={index}
                selectedPlan={selectedPlan}
              />
            ))}
          </div>
          <Footer
            canGoBack
            onBackPress={() => setCurrentStep(2)}
            onNextPress={() => setCurrentStep(4)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Step3;
