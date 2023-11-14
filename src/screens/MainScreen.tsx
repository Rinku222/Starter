import React, { useState } from "react";
import CustomStepper from "../components/Molecules/Stepper";
import BackgroundImage from "../assets/images/bg-sidebar-desktop.svg";
import MobileBackgroundImage from "../assets/images/bg-sidebar-mobile.svg";
import Step1 from "../components/Molecules/steps/Step1";
import Step2 from "../components/Molecules/steps/Step2";
import Step3 from "../components/Molecules/steps/Step3";
import Step4 from "../components/Molecules/steps/Step4";
import Confirmation from "../components/Molecules/steps/Step5";
import Banner from "../components/Molecules/Banner";

interface RenderStepTypes {
  currentStep: number;
  setCurrentStep: (value: number) => void;
  selectedPlan: string;
  setSelectedPlan: (e: string) => void;
  selectedPlanName: { name: string; amount: number };
  setSelectedPlanName: (e: { name: string; amount: number }) => void;
  setSelectedAddOns: (e: string[]) => void;
  selectedAddOns: string[];
}

interface SelectedPlanNameType {
  name: string;
  amount: number;
}

const RenderStep = ({
  currentStep,
  setCurrentStep,
  selectedPlan,
  setSelectedPlan,
  setSelectedPlanName,
  selectedPlanName,
  selectedAddOns,
  setSelectedAddOns,
}: RenderStepTypes) => {
  switch (currentStep) {
    case 1:
      return <Step1 setCurrentStep={setCurrentStep} />;

    case 2:
      return (
        <Step2
          setCurrentStep={setCurrentStep}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          selectedPlanName={selectedPlanName}
          setSelectedPlanName={setSelectedPlanName}
        />
      );

    case 3:
      return (
        <Step3
          setCurrentStep={setCurrentStep}
          selectedPlan={selectedPlan}
          selectedAddOns={selectedAddOns}
          setSelectedAddOns={setSelectedAddOns}
        />
      );

    case 4:
      return (
        <Step4
          setCurrentStep={setCurrentStep}
          selectedPlan={selectedPlan}
          selectedPlanName={selectedPlanName}
          selectedAddOns={selectedAddOns}
        />
      );

    default:
      return <Confirmation />;
  }
};

const MainScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [selectedPlan, setSelectedPlan] = useState<string>("monthly");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["", "", ""]);
  const [selectedPlanName, setSelectedPlanName] =
    useState<SelectedPlanNameType>({
      name: "Arcade",
      amount: 9,
    });

  return (
    <div className="flex flex-1">
      <CustomStepper currentStep={currentStep} />
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row w-full">
        <Banner />
        <RenderStep
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          selectedPlanName={selectedPlanName}
          setSelectedPlanName={setSelectedPlanName}
          selectedAddOns={selectedAddOns}
          setSelectedAddOns={setSelectedAddOns}
        />
      </div>
    </div>
  );
};

export default MainScreen;
