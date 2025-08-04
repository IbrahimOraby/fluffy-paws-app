import React from "react";
import FilledButton from "../../../ui/Buttons/FilledButton";
import petOwnerImg from "../../../assets/images/clientImg.jpg";
import sitterImg from "../../../assets/images/sitterImg.png";
import shelterImg from "../../../assets/images/orgImg.jpg";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";

export default function UserRoleSelection() {
  const roles = [
    {
      id: "owner",
      title: "Pet Owner",
      imgSrc: petOwnerImg,
      description: [
        "Manage pet profiles and health.",
        "Book trusted sitters and care.",
        "Track bookings and history.",
        "Join a pet community.",
      ],
      buttonName: "Pet Owner",
    },
    {
      id: "sitter",
      title: "Personal Sitter",
      imgSrc: sitterImg,
      description: [
        "Offer pet care services.",
        "Set own rates and hours.",
        "Connect with local owners.",
        "Manage bookings and earnings.",
      ],
      buttonName: "Sitter",
    },
    {
      id: "shelter",
      title: "Organization",
      imgSrc: shelterImg,
      description: [
        "Manage animal intake.",
        "Offer boarding and housing.",
        "Connect for adoptions.",
        "Oversee facility operations.",
      ],
      buttonName: "Shelter",
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
              className="bg-light-color rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-between items-center text-center border border-gray-200"
            >
              <img
                src={role.imgSrc}
                alt={`${role.title} Icon`}
                className="w-full h-60 object-cover mb-6 rounded-tl-xl rounded-tr-xl"
              />
              <div className="h-10 mb-4 flex items-center">
                <Heading className="text-header-md text-primary-color">
                  {" "}
                  {role.title}
                </Heading>
              </div>
              <ul className="list-disc pl-6 pr-6 list-inside text-paragraph-color text-left space-y-2 mb-6">
                {role.description.map((item, index) => (
                  <li key={index} className="pb-1">
                    {item}
                  </li>
                ))}
              </ul>
              <FilledButton
                className="w-[80%] mb-4 bg-primary-color rounded-3xl text-white-color transition-all duration-300 ease-in-out hover:bg-hover-color py-3 px-6 text-lg"
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
