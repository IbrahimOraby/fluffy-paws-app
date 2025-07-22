import React from "react";
import { StaticPawIcon } from "../Icons/StaticIcons";

export default function NumberInput() {
  return (
    <div>
      <div className={"flex items-center gap-4  px-3 py-2"}>
        <span className=" text-base ">
          <StaticPawIcon color="#be5985" />
        </span>
        <input
          type="number"
          className="input validator"
          required
          placeholder="Pets Number (up to 3)"
          min="1"
          max="3"
          title="Pets Number"
        />
      </div>
    </div>
  );
}
