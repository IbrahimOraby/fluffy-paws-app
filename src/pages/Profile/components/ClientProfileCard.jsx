import React from "react";
import profileImg from "../../../assets/images/man-159847_1280.png";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";

export default function ClientProfileCard({
  avatarSrc,
  fullName,
  email,
  phoneNumber,
  address,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:gap-12 gap-6">
      <img
        src={avatarSrc ? avatarSrc : profileImg}
        alt="User Avatar"
        className="rounded-full w-30 bg-light-color-300 object-cover"
      />
      <div className="flex-1 w-full space-y-6">
        <div className="space-y-1">
          <Paragraph className="text-paragraph-color text-paragraph-sm">
            Full Name
          </Paragraph>
          <SubHeading className="text-header-color text-subheader-lg">
            {fullName || "N/A"}
          </SubHeading>
        </div>
        <div className="space-y-1">
          <Paragraph className="text-paragraph-color text-paragraph-sm">
            Email Address
          </Paragraph>
          <SubHeading className="text-header-color text-subheader-lg">
            {email || "N/A"}
          </SubHeading>
        </div>
        <div className="space-y-1">
          <Paragraph className="text-paragraph-color text-paragraph-sm">
            Phone Number
          </Paragraph>
          <SubHeading className="text-header-color text-subheader-lg">
            {phoneNumber || "N/A"}
          </SubHeading>
        </div>
        <div>
          <Paragraph className="text-paragraph-color text-paragraph-sm">
            Address
          </Paragraph>
          <SubHeading className="text-header-color text-subheader-lg">
            {address || "N/A"}
          </SubHeading>
        </div>
      </div>
    </div>
  );
}