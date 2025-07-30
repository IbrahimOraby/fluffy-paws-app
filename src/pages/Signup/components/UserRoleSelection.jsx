import React from "react";
import FilledButton from "../../../ui/Buttons/FilledButton";
import petOwnerImg from "../../../assets/images/eg9a_s0c1_201128.jpg";
import sitterImg from "../../../assets/images/21200647.jpg";
import shelterImg from "../../../assets/images/rlbm_6cj9_210914.jpg";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import {
  StaticDogIcon,
  StaticPawIcon,
  StaticCatIcon,
} from "../../../ui/Icons/StaticIcons";

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
      buttonName: "Pet Owner",
      icon: <StaticDogIcon />,
    },
    {
      id: "sitter",
      title: "Sitter",
      imgSrc: sitterImg,
      description: [
        "Offer pet sitting, walking, and boarding",
        "Set your own rates and availability",
        "Connect with pet owners in your area",
        "Manage your bookings and earnings",
      ],
      buttonName: "Sitter",
      icon: <StaticPawIcon />,
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
      buttonName: "Shelter",
      icon: <StaticCatIcon />,
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
        {/* Cards container */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-between items-center text-center border border-gray-200"
            >
              <img
                src={role.imgSrc}
                alt={`${role.title} Icon`}
                className="mb-6 w-34 h-34 object-cover rounded-full"
              />
              <Heading className="text-header-md text-primary-color mb-4">
                {" "}
                {role.title}
              </Heading>
              <ul className="text-gray-700 text-left space-y-2 flex-grow mb-6">
                {role.description.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start border-b-2 text-paragraph-color border-secondary-color pb-4 pt-4"
                  >
                    <span className="text-primary-color mr-2 text-xl leading-none">
                      {role.icon}
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <FilledButton
                className="w-full bg-primary-color rounded-3xl text-white-color transition-all duration-300 ease-in-out hover:bg-hover-color py-3 px-6 text-lg"
                onClick={() => console.log(`Selected: ${role.title}`)}
              >
                {/* {role.buttonName} */}
                Choose
              </FilledButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
