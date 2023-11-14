import React from "react";

interface RenderInputTypes {
  name: string;
  value: string | number;
  error: string | undefined;
  placeholder: string | undefined;
  onChange: (e: object) => void;
  touched: boolean | undefined;
  handleBlur: (e: object) => void;
}

const RenderInput = ({
  name,
  value,
  error,
  touched,
  placeholder,
  onChange,
  handleBlur,
}: RenderInputTypes) => {
  return (
    <div className="flex flex-1 flex-col">
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`border border-solid rounded w-full p-2 ${
          error ? "border-error" : "border-gray-shade-1"
        }`}
      />
      {touched && error && (
        <div className="text-error text-xs font-bold">{error}</div>
      )}
    </div>
  );
};

export default RenderInput;
