import React from "react";

type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "datetime-local"
  | "time"
  | "color";

interface InputTextProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: InputType;
  placeholder?: string;
  id?: string;
  autoComplete?: boolean;
  required?: boolean;
}

export default function InputText({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  id = `input-${label.toLowerCase().replace(/\s+/g, "-")}`,
  autoComplete = false,
  required = false,
}: InputTextProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium ps-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete ? "on" : "off"}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-[#1E252C] text-cyan-50 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-3 py-2"
      />
    </div>
  );
}
