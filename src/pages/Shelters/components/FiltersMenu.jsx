import React from "react";
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
  return (
    <div className="bg-light-color mb-5 p-4 flex flex-col gap-2 md:flex-row md:justify-center">
      <IconPlaceholderInput
        icon={<StaticMapIcon />}
        placeholder={"Portsaid, Egypt"}
        width="w-full"
      />
      <div></div>
      <IconPlaceholderInput
        icon={<StaticPawIcon />}
        placeholder={"1 Puppy"}
        width="w-full"
      />
      <div className="flex gap-5 justify-between">
        <CalendarInput />
        <CalendarInput />
      </div>

      <FilledButton className="w-full md:w-fit bg-primary-color text-white rounded-4xl">
        <StaticSearchIcon size={15} />
        Search
      </FilledButton>
      <Select
        options={["Price", "Reviews", "Nearby"]}
        title={"Sort By"}
        className="rounded-4xl hover:bg-primary-color-100"
      />
    </div>
  );
};

export default FiltersMenu;
