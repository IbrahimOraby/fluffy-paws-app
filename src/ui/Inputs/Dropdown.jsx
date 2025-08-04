import React from "react";
import { useField } from "formik";
import { StaticCatIcon } from "../Icons/StaticIcons";

export default function DropdownFormik({ name, options = [] }) {
  // field = { name, value, onChange, onBlur }
  // meta   = { touched, error }
  const [field, meta] = useField(name);

  return (
    <div className="flex items-center gap-4 px-3 py-2">
      <StaticCatIcon color="#be5985" />

      <select
        {...field} // name, value, onChange, onBlur
        className={`input ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
      >
        <option value="">Select Pet Type</option>
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
