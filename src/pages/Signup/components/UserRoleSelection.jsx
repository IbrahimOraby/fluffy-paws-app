import React from "react";
// Assuming FilledButton is available at this path for consistent styling
import FilledButton from "../../../ui/Buttons/FilledButton";
import petOwnerImg from "../../../assets/images/eg9a_s0c1_201128.jpg";
import sitterImg from "../../../assets/images/21200647.jpg";
import shelterImg from "../../../assets/images/rlbm_6cj9_210914.jpg";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";

export default function UserRoleSelection() {
  const roles = [
    {
      id: "owner",
      title: "Pet Owner",
      imgSrc: petOwnerImg,
      description: [
        "Create and manage your pet's profile and health",
        "Book trusted sitters or shelters",
        "Track booking status and history",
        "Connect with a community of pet lovers",
      ],
      buttonName: "I'm a Pet Owner",
    },
    {
      id: "sitter",
      title: "Sitter",
      imgSrc: sitterImg,
      description: [
        " Offer pet sitting, walking, and boarding",
        "Set your own rates and availability",
        "Connect with pet owners in your area",
        "Manage your bookings and earnings",
      ],
      buttonName: "I'm a Pet Sitter",
    },
    {
      id: "shelter",
      title: "Shelter",
      imgSrc: shelterImg,
      description: [
        "Manage animal intake and adoption",
        "Offer boarding and temporary housing",
        "Connect with owners for fostering/adoption",
        "Oversee facility operations and staff",
      ],
      buttonName: "I'm a Shelter",
    },
  ];
  return (
    <div className="grid grid-cols-12 mb-12 px-8 md:px-0">
      <div className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 text-center">
        {/* Title for the selection page */}
        <Heading className="text-header-color text-header-lg mt-8 mb-8">
          Are you signing up as an individual or an organization?
        </Heading>
        <Paragraph className="text-paragraph-color text-paragraph-lg">
          Choose the role that best describes how you'll use our platform.
        </Paragraph>
      </div>
    </div>
  );
}
