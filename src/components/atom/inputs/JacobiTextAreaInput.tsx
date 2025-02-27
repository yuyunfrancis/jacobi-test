import React, { useState, useEffect } from "react";
import { TextareaProps } from "../../../types/input";

const JacobiTextAreaInput: React.FC<TextareaProps> = ({
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
  rows = 4,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(value.length > 0);
  }, [value]);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
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
              : "text-gray-500 top-3"
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={isFocused ? placeholder : ""}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        required={required}
        rows={rows}
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

export default JacobiTextAreaInput;
