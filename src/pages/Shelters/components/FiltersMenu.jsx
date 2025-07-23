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
    <div className="bg-light-color mb-5 p-4 flex flex-col gap-2 md:flex-row md:justify-center items-center">
      <IconPlaceholderInput
        icon={<StaticMapIcon />}
        placeholder={"Portsaid, Egypt"}
        className="w-full md:w-[176px]"
      />
      <IconPlaceholderInput
        icon={<StaticPawIcon />}
        placeholder={"1 Puppy"}
        className="w-full md:w-[176px]"
      />
      <div className="flex gap-5  w-full max-w-lg justify-around ">
        <CalendarInput width="w-full" />
        <CalendarInput width="w-full" />
      </div>

        {/* max-w-lg = 512px, which is equal the size of two inputs to be symetric  */}
      <div className="flex w-full max-w-lg gap-2 md:w-3xs ">
        <FilledButton className=" bg-primary-color text-white rounded-4xl w-1/2 min-w-[120px] px-0 ">
          <StaticSearchIcon size={15}/>
          Search
        </FilledButton>
        <Select
          options={["Price", "Reviews", "Nearby"]}
          title={"Sort By"}
          containerClass="w-1/2 min-w-[120px]"
          className="rounded-4xl hover:bg-primary-color-100 w-full px-0 "
        />
      </div>
    </div>
  );
};

export default FiltersMenu;
