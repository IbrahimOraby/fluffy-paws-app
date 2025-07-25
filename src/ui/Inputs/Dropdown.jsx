import React from "react";
import { StaticCatIcon, StaticPawIcon } from "../Icons/StaticIcons";

export default function Dropdown({ options }) {
  return (
    <div
      style={{
        color: "#8b8b8c",
      }}
    >
      <div className={"flex items-center gap-4  px-3 py-2"}>
        <span className=" text-base ">
          <StaticCatIcon color="#be5985" />
        </span>
        <select className="input">
          <option value="">Select Pet Type</option>
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
