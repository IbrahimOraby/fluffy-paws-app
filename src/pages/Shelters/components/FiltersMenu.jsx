import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IconPlaceholderInput from "../../../ui/Inputs/Iconplaceholderinput";
import {
  StaticMapIcon,
  StaticPawIcon,
  StaticSearchIcon,
  StaticUserIcon,
} from "../../../ui/Icons/StaticIcons";
import CalendarInput from "./../../../ui/Inputs/CalendarInput";
import FilledButton from "../../../ui/Buttons/FilledButton";
import Select from "../../../ui/Inputs/Select";

const FiltersMenu = () => {
  const locationHook = useLocation();
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [pet, setPet] = useState("");
  const [provider , setprovider ] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

 
  useEffect(() => {
    const params = new URLSearchParams(locationHook.search);
    setLocation(params.get("location") || "");
    setPet(params.get("animal") || "");
    setprovider(params.get("provider")||"")
    setStartDate(params.get("startDate") ? new Date(params.get("startDate")) : null);
    setEndDate(params.get("endDate") ? new Date(params.get("endDate")) : null);
  }, [locationHook.search]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (pet) params.set("animal", pet);
    if (startDate) params.set("startDate", startDate.toISOString());
    if (endDate) params.set("endDate", endDate.toISOString());

    navigate(`/shelters?${params.toString()}`);
  };

  const egyptGovernorates = [
    "Cairo", "Giza", "Alexandria", "Dakahlia", "Red Sea", "Beheira", "Fayoum", "Gharbia",
    "Ismailia", "Monufia", "Minya", "Qaliubiya", "New Valley", "Suez", "Aswan", "Assiut",
    "Beni Suef", "Port Said", "Damietta", "Sharkia", "South Sinai", "Kafr El Sheikh",
    "Matruh", "Luxor", "Qena", "North Sinai", "Sohag"
  ];
  
  const pets = [
    "Dogs","Cats"
  ];
    const providers  = [
    "Organization","Personal Sitter"
  ];


  return (
   <div className="bg-light-color mb-5 p-4 flex flex-wrap gap-y-3 gap-x-4 justify-center items-center">
  {/* Location Selector */}
  <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 h-11 rounded-md shadow-sm w-full md:w-[200px] focus-within:border-[#BE5985] focus-within:ring-2 focus-within:ring-[#BE5985] focus-within:ring-offset-2">
    <StaticMapIcon className="w-5 h-5 text-gray-500" />
    <select
      name="location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="w-full bg-transparent outline-none text-sm"
    >
      <option value="" disabled hidden>Select your Location</option>
      {egyptGovernorates.map((gov) => (
        <option key={gov} value={gov}>{gov}</option>
      ))}
    </select>
  </div>

  {/* Pet Selector */}
  <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 h-11 rounded-md shadow-sm w-full md:w-[160px] focus-within:border-[#BE5985] focus-within:ring-2 focus-within:ring-[#BE5985] focus-within:ring-offset-2">
    <StaticPawIcon className="w-5 h-5 text-gray-500" />
    <select
      name="pet"
      value={pet}
      onChange={(e) => setPet(e.target.value)}
      className="w-full bg-transparent outline-none text-sm"
    >
      <option value="" disabled hidden>Select your Pet</option>
      {pets.map((pet) => (
        <option key={pet} value={pet}>{pet}</option>
      ))}
    </select>
  </div>

  {/* Provider Selector */}
  <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 h-11 rounded-md shadow-sm w-full md:w-[180px] focus-within:border-[#BE5985] focus-within:ring-2 focus-within:ring-[#BE5985] focus-within:ring-offset-2">
    <StaticUserIcon className="w-5 h-5 text-gray-500" />
    <select
      name="provider"
      value={provider}
      onChange={(e) => setprovider(e.target.value)}
      className="w-full bg-transparent outline-none text-sm"
    >
      <option value="" disabled hidden>Select your provider</option>
      {providers.map((prov) => (
        <option key={prov} value={prov}>{prov}</option>
      ))}
    </select>
  </div>

  {/* Date Pickers */}
  <div className="flex gap-2 w-full md:w-auto ">
    <CalendarInput width="lg:w-[160px] md:w-[160px] sm:w-[100px]  " value={startDate} onChange={setStartDate} />
    <CalendarInput width="lg:w-[160px]  md:w-[160px]  sm:w-[100px] " value={endDate} onChange={setEndDate} />
  </div>

  
  {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto lg:flex-row lg:items-center lg:justify-start">
  <FilledButton
    className="bg-primary-color text-white rounded-4xl w-full md:w-[120px] sm:w-[100px] px-0"
    onClick={handleSearch}
  >
    <StaticSearchIcon size={15} />
    Search
  </FilledButton>

  <Select
    options={["Price", "Reviews", "Nearby"]}
    title={"Sort By"}
    containerClass="w-full md:w-[120px]"
    className="rounded-4xl hover:bg-primary-color-100 px-0"
  />
</div>

</div>

  );
};

export default FiltersMenu;
