import React from "react";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";

export default function MessageItem({sender,messageSnippet,timestamp}) {
  return (
    <>
      <li className="p-3 bg-light-color border-l-2 transition-all duration-300 ease-in-out hover:bg-light-color-300  border-primary-color rounded-lg flex justify-between items-center">
        <span className="flex gap-2 items-center text-header-color">
          <SubHeading className="text-subheader-md ">{sender}:</SubHeading>{" "}
          "{messageSnippet}"
        </span>
        <span className="text-sm text-paragraph-color">{timestamp}</span>
      </li>
    </>
  );
}
