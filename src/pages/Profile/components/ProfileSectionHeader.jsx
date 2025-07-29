import React from "react";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import Heading from "../../../ui/Typography/Heading/Heading";

export default function ProfileSectionHeader({title,subTitle}) {
  return (
    <>
      <Heading className="text-header-md mb-3">{title}</Heading>
      <Paragraph className="text-paragraph-md mb-6">
       {subTitle}
      </Paragraph>
    </>
  );
}
