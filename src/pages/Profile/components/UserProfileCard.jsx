import React from "react";
import profileImg from "../../../assets/images/man-159847_1280.png";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";

export default function UserProfileCard({
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
      <div className="flex-1 w-full space-y-4">
        <div>
          <Paragraph className="text-paragraph-color text-paragraph-xs">
            Full Name
          </Paragraph>
          <SubHeading className="text-header-color text-subheader-md">
            {fullName}
          </SubHeading>
        </div>
        <div>
          <Paragraph className="text-paragraph-color text-paragraph-xs">
            Email Address
          </Paragraph>
          <SubHeading className="text-header-color text-subheader-md">
            {email}
          </SubHeading>
        </div>
        <div>
          <Paragraph className="text-paragraph-color text-paragraph-xs">
            Phone Number
          </Paragraph>
          <SubHeading className="text-header-color text-subheader-md">
            {phoneNumber}
          </SubHeading>
        </div>
        <div>
          <Paragraph className="text-paragraph-color text-paragraph-xs">
            Address
          </Paragraph>
          <SubHeading className="text-header-color text-subheader-md">
            {address}
          </SubHeading>
        </div>
      </div>
    </div>
  );
}
