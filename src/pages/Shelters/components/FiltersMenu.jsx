import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  StaticMapIcon,
  StaticPawIcon,
  StaticSearchIcon,
  StaticUserIcon,
} from "../../../ui/Icons/StaticIcons";
import FilledButton from "../../../ui/Buttons/FilledButton";
import { ProviderSelect } from "./FilterSelect";

const egyptGovernorates = [
  "All", "Cairo", "Port Said", "Alexandria", "Giza", "Dakahlia", "Red Sea",
  "Beheira", "Fayoum", "Gharbia", "Ismailia", "Monufia", "Minya", "Qaliubiya",
  "New Valley", "Suez", "Aswan", "Assiut", "Beni Suef", "Damietta", "Sharkia",
  "South Sinai", "Kafr El Sheikh", "Matruh", "Luxor", "Qena", "North Sinai", "Sohag"
];

const FiltersMenu = () => {
  const locationHook = useLocation();
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [pet, setPet] = useState("");
  const [provider, setprovider] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(locationHook.search);
    setLocation(params.get("location") || "");
    setPet(params.get("animal") || "");
    setprovider(params.get("provider") || "");
  }, [locationHook.search]);

  const handleSearch = () => {
    setIsLoading(true);

    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (pet) params.set("animal", pet);
    if (provider) params.set("provider", provider);

    setTimeout(() => {
      navigate(`/shelters?${params.toString()}`);
      setIsLoading(false);
    }, 400); 
  };

  const pets = ["All", "Dogs", "Cats"];
  const providers = ["All", "Organization", "Personal Sitter"];

  return (
    <div className="bg-light-color mb-5 p-4 flex flex-wrap gap-y-3 gap-x-4 justify-evenly items-center">
      <div className="flex gap-5 flex-wrap sm:flex-nowrap">
        <ProviderSelect
          items={egyptGovernorates}
          selectedItem={location}
          setSelectedItem={setLocation}
          icon={StaticMapIcon}
        />

        <ProviderSelect
          icon={StaticPawIcon}
          items={pets}
          selectedItem={pet}
          setSelectedItem={setPet}
        />

        <ProviderSelect
          items={providers}
          selectedItem={provider}
          setSelectedItem={setprovider}
          icon={StaticUserIcon}
        />
      </div>

      <FilledButton
        className={`rounded-4xl w-full md:w-[120px] sm:w-[100px] px-0 ${
          isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-primary-color"
        } text-white`}
        onClick={handleSearch}
        disabled={isLoading}
      >
        <StaticSearchIcon size={15} />
        {isLoading ? "Searching..." : "Search"}
      </FilledButton>
    </div>
  );
};

export default FiltersMenu;
