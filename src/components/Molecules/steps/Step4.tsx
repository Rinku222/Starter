import React, { useMemo } from "react";
import Layout from "../../../Layout/Layout";
import Footer from "../Footer";

interface StepType {
  setCurrentStep: (value: number) => void;
  selectedPlan: string;
  selectedPlanName: { name: string; amount: number };
  selectedAddOns: string[];
}

const getAmount = (value: number) => {
  if (value === 0) {
    return 1;
  } else {
    return 2;
  }
};

const Step4 = ({
  setCurrentStep,
  selectedPlan,
  selectedPlanName,
  selectedAddOns,
}: StepType) => {
  const total = useMemo(() => {
    const planAmount =
      selectedPlanName.amount * (selectedPlan === "monthly" ? 1 : 10);
    let a = 0;
    selectedAddOns.map((item, index) => {
      if (item) {
        a = a + getAmount(index);
      }
    });

    const addOnAmount = a * (selectedPlan === "monthly" ? 1 : 10);
    const localTotal = planAmount + addOnAmount;
    return localTotal;
  }, [selectedAddOns, selectedPlan, selectedPlanName]);

  return (
    <Layout>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col bg-background-shade sm:bg-white">
          <div className="flex flex-1 shadow-2xl sm:shadow-none flex-col m-4 p-6 rounded mt-[-100px] sm:mt-[-200px] md:mt-[-300px] lg:mt-[0px] xl:mt-[0px] bg-white">
            <div className="text-3xl font-bold text-purple-shade-1 mb-2">
              Finishing Up
            </div>
            <div className="text-base text-gray-shade-2 mb-6">
              Double-check everything looks OK before confirming
            </div>
            <div>
              <div className="bg-selected-plane-bg p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-purple-shade-1 text-lg font-bold capitalize">
                      Arcade ({selectedPlan})
                    </div>
                    <div
                      className="cursor-pointer underline text-gray-shade-7 text-sm"
                      onClick={() => {
                        setCurrentStep(2);
                      }}
                    >
                      Change
                    </div>
                  </div>
                  <div className="text-purple-shade-1 font-bold text-lg">
                    $
                    {selectedPlan === "monthly"
                      ? selectedPlanName.amount
                      : selectedPlanName.amount * 10}
                    /{selectedPlan === "monthly" ? "mo" : "yr"}
                  </div>
                </div>
                <div className="border border-solid border-black-500 w-full my-3" />
                {selectedAddOns.map((item, index) => {
                  if (item) {
                    return (
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-gray-shade-7">{item}</div>
                        <div className="text-purple-shade-1">
                          +$
                          {selectedPlan === "monthly"
                            ? getAmount(index)
                            : getAmount(index) * 10}
                          /{selectedPlan === "monthly" ? "mo" : "yr"}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="flex justify-between items-center p-6">
                <div className="text-gray-shade-7 font-bold">
                  Total (per {selectedPlan === "monthly" ? "month" : "year"})
                </div>
                <div className="text-primary-blue font-bold text-xl">
                  +${total}/{selectedPlan === "monthly" ? "mo" : "yr"}
                </div>
              </div>
            </div>
          </div>
          <Footer
            canGoBack
            canGoNext
            onBackPress={() => setCurrentStep(3)}
            onNextPress={() => setCurrentStep(5)}
            nextName="Confirm"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Step4;
