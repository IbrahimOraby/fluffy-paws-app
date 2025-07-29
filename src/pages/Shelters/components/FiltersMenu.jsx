import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IconPlaceholderInput from "../../../ui/Inputs/Iconplaceholderinput";
import {
  StaticMapIcon,
  StaticPawIcon,
  StaticSearchIcon,
} from "../../../ui/Icons/StaticIcons";
import CalendarInput from "./../../../ui/Inputs/CalendarInput";
import FilledButton from "../../../ui/Buttons/FilledButton";
import Select from "../../../ui/Inputs/Select";

const FiltersMenu = () => {
  const locationHook = useLocation();
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [pet, setPet] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(locationHook.search);
    setLocation(params.get("location") || "");
    setPet(params.get("animal") || "");
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

  return (
    <div className="bg-light-color mb-5 p-4 flex flex-col gap-2 md:flex-row md:justify-center items-center ">
      <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md shadow-sm w-50  focus-within:border-[#BE5985] 
        focus-within:ring-2 
        focus-within:ring-[#BE5985] 
        focus-within:ring-offset-2 ">
        <StaticMapIcon className="w-5 h-5 text-gray-500" />
        <select
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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

      <IconPlaceholderInput
        icon={<StaticPawIcon />}
        placeholder={"1 Puppy"}
        className="w-full md:w-[176px]"
        value={pet}
        onChange={(e) => setPet(e.target.value)}
      />

      <div className="flex gap-5 w-full max-w-lg justify-around">
        <CalendarInput width="w-full" value={startDate} onChange={setStartDate} />
        <CalendarInput width="w-full" value={endDate} onChange={setEndDate} />
      </div>

      <div className="flex w-full max-w-lg gap-2 md:w-3xs ">
        <FilledButton
          className="bg-primary-color text-white rounded-4xl w-1/2 min-w-[120px] px-0"
          onClick={handleSearch}
        >
          <StaticSearchIcon size={15} />
          Search
        </FilledButton>

        <Select
          options={["Price", "Reviews", "Nearby"]}
          title={"Sort By"}
          containerClass="w-1/2 min-w-[120px]"
          className="rounded-4xl hover:bg-primary-color-100 w-full px-0"
        />
      </div>
    </div>
  );
};

export default FiltersMenu;
