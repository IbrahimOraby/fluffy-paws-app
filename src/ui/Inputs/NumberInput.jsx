import React from "react";
import { useField } from "formik";
import { StaticPawIcon } from "../Icons/StaticIcons";

export default function NumberInputFormik({
  name,
  min = 1,
  max = 3,
  icon = <StaticPawIcon color="#be5985" />,
}) {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="flex items-center gap-4 px-3 py-2">
      {icon}

      <input
        type="number"
        {...field}
        min={min}
        max={max}
        placeholder={`Number (up to ${max})`}
        className={`input validator ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
        onChange={(e) => {
          const val = Math.max(min, Math.min(max, Number(e.target.value)));
          helpers.setValue(val);
        }}
      />

      {meta.touched && meta.error && (
        <span className="text-red-500 text-xs ml-1">{meta.error}</span>
      )}
    </div>
  );
}
