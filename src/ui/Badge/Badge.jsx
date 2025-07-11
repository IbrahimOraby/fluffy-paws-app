import React from "react";
import Paragraph from "../Typography/Paragraph/Paragraph";
import SubHeading from "../Typography/SubHeadings/SubHeading";

function Badge({icon, text , className=""}) {
  return (
    <div className={`badge badge-sof p-3 ${className}`}>
     {icon}
      <SubHeading >{text}</SubHeading>
    </div>
  );
}

export default Badge;
