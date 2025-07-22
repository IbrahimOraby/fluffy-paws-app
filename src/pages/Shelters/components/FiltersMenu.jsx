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
      <div></div>
      <IconPlaceholderInput
        icon={<StaticPawIcon />}
        placeholder={"1 Puppy"}
        className="w-full md:w-[176px]"
      />
      <div className="flex gap-5  w-full max-w-lg justify-around ">
        <CalendarInput width="w-full" />
        <CalendarInput width="w-full" />
      </div>

      <div className="w-full max-w-md md:w-fit flex ">
        <FilledButton className=" bg-primary-color text-white rounded-4xl w-[50%] ">
          <StaticSearchIcon size={15} />
          Search
        </FilledButton>
        <Select
          options={["Price", "Reviews", "Nearby"]}
          title={"Sort By"}
          containerClass="w-[50%]"
          className="rounded-4xl hover:bg-primary-color-100 w-full "
        />
      </div>
    </div>
  );
};

export default FiltersMenu;
