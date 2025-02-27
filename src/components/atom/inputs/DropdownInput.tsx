import React, { useState, useEffect } from "react";
import { SelectProps } from "../../../types/input";

const DropdownInput: React.FC<SelectProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  options,
  error,
  required = false,
  disabled = false,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(value !== "");
  }, [value]);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div className={`relative mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={`absolute left-3 transition-all duration-200 ${
            isFocused || hasValue
              ? "text-xs -top-2 bg-white px-1 text-slate-800"
              : "text-gray-500 top-1/2 -translate-y-1/2"
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          className={`
            block w-full px-3 py-2 border rounded-md appearance-none transition-all duration-200
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
        >
          <option value="" disabled>
            Select...
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default DropdownInput;
