import React, { useRef } from "react";
import FilledButton from "../../../ui/Buttons/FilledButton";
import PersonalLicenseImg from "../../../assets/images/personal-license.png";
import usePersonalFormStore from "../../../store/usePersonalProfile";
import CustomForm from "./components/CustomForm";

const steps = [
  {
    title: "Help pet owners contact with you",
    subtitle:
      "Please fill out the following information to set up your organization profile on Fluffy Paw.",
    action: "setInfo",
    fields: [
      { name: "Address", type: "text", placeholder: "Enter your address" },
      {
        name: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number"
      }
    ],
    initialValues: {
      address: "",
      phoneNumber: ""
    }
  },
  {
    title: "SECOND:Help pet owners contact with you",
    subtitle:
      "Please fill out the following information to set up your organization profile on Fluffy Paw.",
    action: "setInfo",
    fields: [
      { name: "Address", type: "text", placeholder: "Enter your address" },
      {
        name: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number"
      }
    ],
    initialValues: {
      address: "",
      phoneNumber: ""
    }
  }
];

function PersonalSetup() {
  const formikRef = useRef();

  const nextForm = usePersonalFormStore((state) => state.nextForm);
  const prevForm = usePersonalFormStore((state) => state.prevForm);
  const currentFormIndex = usePersonalFormStore(
    (state) => state.currentFormIndex
  );
  const setContact = usePersonalFormStore((state) => state.setContact);
  const currentStep = steps[currentFormIndex - 1];

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="p-10 font-bold text-2xl text-center text-primary-color-500 bg-light-color">
        Welcome to your Personal Fluffy Paw sitter profile!{" "}
      </header>

      <div className="flex-1 flex justify-center items-center p-4">
        {currentFormIndex === 0 && (
          <img
            src={PersonalLicenseImg}
            alt="Organization License"
            className="w-full max-w-96 object-contain"
          />
        )}

        {currentFormIndex > 0 && (
          <div className="w-full max-w-xl">
            <h2 className="text-header-md mb-4">{currentStep.title}</h2>
            <p className="text-sm text-gray-500 mb-6">{currentStep.subtitle}</p>
            <CustomForm
              fields={currentStep.fields}
              initialValues={currentStep.initialValues}
              formikRef={formikRef}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
        )}
      </div>

      <footer className="p-4 bg-light-color text-primary-color-500 text-right">
        {currentFormIndex > 0 && (
          <FilledButton
            type="button"
            className="mr-4 text-primary-color-500 hover:text-primary-color-700 rounded-4xl border-primary-color-500"
            onClick={prevForm}
          >
            Previous
          </FilledButton>
        )}
        <FilledButton
          onClick={() => {
            if (currentFormIndex === 0) {
              nextForm();
            } else {
              formikRef.current.submitForm();
            }
          }}
          disabled={currentFormIndex === steps.length}
        >
          Continue
        </FilledButton>
      </footer>
    </div>
  );
}

export default PersonalSetup;
