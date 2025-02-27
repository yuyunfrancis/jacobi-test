import React, { useState, useEffect } from "react";
import { PhoneInputProps } from "../../../types/input";

const PhoneInput: React.FC<PhoneInputProps> = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  className = "",
  countryCode,
  onCountryCodeChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(value.length > 0 || countryCode.length > 0);
  }, [value, countryCode]);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const countryCodes = [
    { value: "+1", label: "+1 🇺🇸" },
    { value: "+44", label: "+44 🇬🇧" },
    { value: "+49", label: "+49 🇩🇪" },
    { value: "+33", label: "+33 🇫🇷" },
    { value: "+39", label: "+39 🇮🇹" },
    { value: "+34", label: "+34 🇪🇸" },
    { value: "+86", label: "+86 🇨🇳" },
    { value: "+81", label: "+81 🇯🇵" },
    { value: "+91", label: "+91 🇮🇳" },
    { value: "+7", label: "+7 🇷🇺" },
    { value: "+55", label: "+55 🇧🇷" },
    { value: "+61", label: "+61 🇦🇺" },
    { value: "+64", label: "+64 🇳🇿" },
    { value: "+880", label: "+880 🇧🇩" },
  ];

  return (
    <div className={`relative mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={`absolute left-3 z-10 transition-all duration-200 ${
            isFocused || hasValue
              ? "text-xs -top-2 bg-white px-1 text-slate-800"
              : "text-gray-500 top-1/2 -translate-y-1/2"
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="flex">
        <div className="w-24 flex-shrink-0">
          <select
            value={countryCode}
            onChange={onCountryCodeChange}
            disabled={disabled}
            className={`
              h-full w-full border-r-0 rounded-l-md border transition-all duration-200
              ${
                error
                  ? "border-red-500"
                  : isFocused
                  ? "border-blue-900"
                  : "border-gray-300"
              }
              ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
              focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-20
            `}
          >
            {countryCodes.map((code) => (
              <option key={code.value} value={code.value}>
                {code.label}
              </option>
            ))}
          </select>
        </div>
        <input
          id={id}
          name={name}
          type="tel"
          placeholder={isFocused ? placeholder : ""}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          className={`
            block flex-1 px-3 py-2 border rounded-r-md transition-all duration-200
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
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PhoneInput;
