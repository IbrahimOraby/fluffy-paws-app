import React from "react";
import { useField } from "formik";
import { StaticCatIcon } from "../Icons/StaticIcons";

export default function DropdownFormik({
  name,
  options = [],
  icon = <StaticCatIcon color="#be5985" />,
}) {
  const [field, meta] = useField(name);

  return (
    <div className="flex items-center gap-4 px-3 py-2">
      {icon}

      <select
        {...field}
        className={`input ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
      >
        <option value="">Select option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {meta.touched && meta.error && (
        <span className="text-red-500 text-xs ml-1">{meta.error}</span>
      )}
    </div>
  );
}
