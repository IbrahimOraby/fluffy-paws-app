import React, { useState } from "react";
import PetWizardForm from "./components/PetWizardForm";
import Paragraph from "../../ui/Typography/Paragraph/Paragraph";
import Heading from "../../ui/Typography/Heading/Heading";
import PetImg from "../../assets/images/IMG_2252.jpg";

const PetProfileForm = () => {
  const [currentStepTitle, setCurrentStepTitle] = useState("Basic");

  return (
    <div className="grid grid-cols-12 mb-12 px-8 md:px-0">
      <div className="flex items-center justify-center h-[500px] rounded-xl shadow-lg col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
        <div className="bg-light-hover-color hidden sm:flex flex-1 min-h-full flex-col gap-2 justify-center items-center col rounded-tl-xl rounded-bl-xl">
          <Paragraph className="text-paragraph-md text-paragraph-color">
            {currentStepTitle}
          </Paragraph>
          <Heading className="text-header-sm text-primary-color">
            Let’s get to know your pet
          </Heading>
          <img src={PetImg} className="w-52 rounded-[50%] mt-8" />
        </div>

        {/* for formik */}
        <div className="bg-white flex-1 min-h-full flex justify-center items-center rounded-tr-xl rounded-br-xl">
          <PetWizardForm onStepChange={setCurrentStepTitle} />
        </div>
      </div>
    </div>
  );
};

export default PetProfileForm;
