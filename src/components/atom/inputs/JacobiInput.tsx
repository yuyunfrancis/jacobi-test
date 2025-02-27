import React, { useState, useEffect } from "react";
import { InputProps } from "../../../types/input";

const JacobiInput: React.FC<InputProps> = ({
  id,
  name,
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(value?.length > 0);
  }, [value]);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div className={`relative mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={`absolute left-3 transition-all duration-200 flex items-center ${
            isFocused || hasValue
              ? "text-xs -top-2 bg-white px-1 text-slate-800 z-10"
              : "text-gray-500 top-1/2 -translate-y-1/2"
          }`}
        >
          <span>{label}</span>
          {required && (
            <span className="text-red-500 ml-1 inline-flex items-center">
              *
            </span>
          )}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={isFocused || hasValue ? placeholder : ""}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        required={required}
        className={`
          block w-full px-3 py-2 border rounded-md transition-all duration-200
          ${
            error
              ? "border-red-500"
              : isFocused
              ? "border-slate-800"
              : "border-gray-300"
          }
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
          focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-opacity-20
        `}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default JacobiInput;
