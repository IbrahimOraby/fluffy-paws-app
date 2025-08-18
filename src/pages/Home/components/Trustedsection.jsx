import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import BackgroundImageCard from "./BackgroundImageCard";
import Animalcard from "./Animalcard";
import homeImg from "../../../assets/images/homeimg1.jpg";
import {
  StaticCatIcon,
  StaticDogIcon,
  StaticMapIcon,
  StaticUserIcon,
} from "../../../ui/Icons/StaticIcons";
import Heading from "../../../ui/Typography/Heading/Heading";
import { HomeIcon, SearchIcon } from "lucide-react";
import CalendarInput from "../../../ui/Inputs/CalendarInput";
import { filtersSchema } from "../../../schemas/formhomeSchema";

export default function Trustedsection() {
  const navigate = useNavigate();

  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");
  const [animalError, setAnimalError] = useState("");
  const [providerError, setProviderError] = useState("");

  const egyptGovernorates = [
    "All",
    "Cairo",
    "Giza",
    "Alexandria",
    "Dakahlia",
    "Red Sea",
    "Beheira",
    "Fayoum",
    "Gharbia",
    "Ismailia",
    "Monufia",
    "Minya",
    "Qaliubiya",
    "New Valley",
    "Suez",
    "Aswan",
    "Assiut",
    "Beni Suef",
    "Port Said",
    "Damietta",
    "Sharkia",
    "South Sinai",
    "Kafr El Sheikh",
    "Matruh",
    "Luxor",
    "Qena",
    "North Sinai",
    "Sohag",
  ];

  const formik = useFormik({
    initialValues: {
      location: "",
      // startDate: "",
      // endDate: "",
    },
    validationSchema: filtersSchema,
    onSubmit: (values) => {
      let isValid = true;

      if (!selectedAnimal) {
        setAnimalError("Please select an animal");
        isValid = false;
      } else {
        setAnimalError("");
      }

      if (!selectedProvider) {
        setProviderError("Please select a provider");
        isValid = false;
      } else {
        setProviderError("");
      }

      if (!isValid) return;

      const formValues = {
        ...values,
        animal: selectedAnimal,
        provider: selectedProvider,
      };

      const query = new URLSearchParams(formValues).toString();
      navigate(`/shelters?${query}`);
    },
  });

  const AnimalSelection = () => (
    <div className="flex-1">
      <Heading className="text-lg sm:text-xl md:text-2xl text-[#565656]">
        Who needs looking after?
      </Heading>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Animalcard
          icon={<StaticDogIcon color="#BE5985" />}
          title="Dogs"
          description="Including puppys"
          value="dogs"
          name="animal"
          checked={selectedAnimal === "dogs"}
          onChange={(e) => setSelectedAnimal(e.target.value)}
          className="w-full sm:w-1/2 h-[100px] items-center"
        />

        <Animalcard
          icon={<StaticCatIcon color="#BE5985" />}
          title="Cats"
          description="Including kittens"
          value="cats"
          name="animal"
          checked={selectedAnimal === "cats"}
          onChange={(e) => setSelectedAnimal(e.target.value)}
          className="w-full sm:w-1/2 h-[100px] items-center"
        />
      </div>
      {animalError && (
        <p className="text-red-500 text-sm mt-1">{animalError}</p>
      )}
    </div>
  );

  const ProviderSelection = () => (
    <div className="flex-1">
      <Heading className="text-lg sm:text-xl md:text-2xl text-[#565656]">
        What type of provider you search for?
      </Heading>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Animalcard
          icon={<StaticUserIcon color="#BE5985" />}
          title="Personal Carer"
          description="Cheaper prices"
          value="Personal Sitter"
          name="provider"
          checked={selectedProvider === "Personal Sitter"}
          onChange={(e) => setSelectedProvider(e.target.value)}
          className="w-full sm:w-1/2 h-[100px] items-center"
        />
        <Animalcard
          icon={<HomeIcon color="#BE5985" />}
          title="Organization"
          description="See our trusted partners"
          value="organization"
          name="provider"
          checked={selectedProvider === "organization"}
          onChange={(e) => setSelectedProvider(e.target.value)}
          className="w-full sm:w-1/2 h-[100px] items-center "
        />
      </div>
      {providerError && (
        <p className="text-red-500 text-sm mt-1">{providerError}</p>
      )}
    </div>
  );

  return (
    <>
      {/* Small screens */}
      <div className="block md:hidden">
        <BackgroundImageCard
          img={homeImg}
          h="Trusted pet care, anytime, anywhere"
          p="Find trusted pet sitters near you"
          buttonclass="hidden"
          imgclass="w-full h-[300px] sm:h-[400px] object-cover"
        />

        <form
          onSubmit={formik.handleSubmit}
          className="mt-6 px-4 flex flex-col gap-10"
        >
          <AnimalSelection />
          <ProviderSelection />

          {/* Location + Dates */}
          <div className="flex flex-col gap-3 flex-1">
            {/* Dropdown Location */}
           {/* Small screens */}
<div className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md shadow-sm w-full focus-within:border-[#BE5985] focus-within:ring-2 focus-within:ring-[#BE5985] focus-within:ring-offset-2">
  <StaticMapIcon className="w-5 h-5 text-gray-500" />
  <select
    name="location"
    value={formik.values.location}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="w-full bg-transparent outline-none text-sm"
  >
    <option value="" disabled hidden>
      Select your Location
    </option>
    {egyptGovernorates.map((gov) => (
      <option key={gov} value={gov}>
        {gov}
      </option>
    ))}
  </select>
</div>

            <div>
            <button
            type="submit"
            className="flex cursor-pointer items-center justify-center gap-2 px-5 py-3 text-sm text-white rounded-full shadow-sm hover:shadow-md transition duration-200 hover:opacity-90 w-full"
            style={{ backgroundColor: "#BE5985" }}
          >
            <SearchIcon className="w-4 h-4" />
            Search for a sitter
          </button>
           </div>
          </div>

         
        </form>
      </div>

      {/* Large screens */}
      <div className="hidden md:block relative">
        <BackgroundImageCard
          img={homeImg}
          h="Trusted pet care, anytime, anywhere"
          p="Find trusted pet sitters  near you"
          buttonclass="hidden"
          imgclass="w-full h-[600px] object-cover"
        />

        <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 bg-[#f4f4f4] rounded-xl p-6 shadow-lg w-[95%] max-w-5xl z-1">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <AnimalSelection />
              <ProviderSelection />
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="flex flex-row gap-5 flex-1">
                {/* Dropdown Location */}
              <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md shadow-sm lg:w-180 md:w-120">


                  <StaticMapIcon className="w-5 h-5 text-gray-500" />

                  <select
                    name="location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    className="w-full bg-transparent outline-none text-sm"
                  >
                    <option value="" disabled hidden>
                      Select your Location
                    </option>
                    {egyptGovernorates.map((gov) => (
                      <option key={gov} value={gov}>
                        {gov}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="">
                  {formik.touched.location && formik.errors.location && (
                    <span className="text-red-500 text-sm mt-1  ">
                      {formik.errors.location}
                    </span>
                  )}
                </div>

              {/* Search Button */}
              <div>
              <button
                type="submit"
                className="flex cursor-pointer items-center justify-center gap-2 px-6 py-3 text-sm text-white rounded-full shadow-sm hover:shadow-md transition duration-200 hover:opacity-90 md:w-auto"
                style={{ backgroundColor: "#BE5985" }}
              >
                <SearchIcon className="w-4 h-4" />
                Search for a sitter
              </button>
              </div>
              </div>

              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
