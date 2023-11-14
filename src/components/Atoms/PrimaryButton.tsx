import React from "react";

interface PrimaryButtonProps {
  isSolid?: boolean;
  onClick: () => void;
  name: string;
}

const PrimaryButton = ({
  isSolid = true,
  onClick,
  name,
}: PrimaryButtonProps) => {
  return (
    <div>
      <button
        className={`${
          isSolid ? "text-white bg-primary-blue" : "text-primary-gray bg-white"
        } font-bold p-2 rounded`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default PrimaryButton;
