import React from "react";
import PrimaryButton from "../Atoms/PrimaryButton";

interface FooterTypes {
  canGoBack?: boolean | undefined;
  canGoNext?: boolean | undefined;
  nextName?: string;
  backName?: string;
  onBackPress?: () => void;
  onNextPress?: () => void;
}

const Footer = ({
  canGoBack = false,
  canGoNext = true,
  backName = "Go Back",
  nextName = "Next Step",
  onBackPress = () => {},
  onNextPress = () => {},
}: FooterTypes) => {
  return (
    <div
      className={`flex ${!canGoBack && canGoNext ? "justify-end" : ""} ${
        canGoBack && canGoNext ? "justify-between" : ""
      } p-4 bg-white`}
    >
      {canGoBack ? (
        <PrimaryButton name={backName} onClick={onBackPress} isSolid={false} />
      ) : null}

      {canGoNext ? (
        <PrimaryButton name={nextName} onClick={onNextPress} />
      ) : null}
    </div>
  );
};

export default Footer;
