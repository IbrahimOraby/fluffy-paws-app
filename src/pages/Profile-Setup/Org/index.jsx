import InfoForm from "./../Org/forms/InfoForm";
import OrganizationLicenseImg from "../../../assets/images/organization-license.png";
import PersonLicenseImg from "../../../assets/images/personal-license.png";
import PetLicenseImg from "../../../assets/images/pet-license.png";
import FilledButton from "../../../ui/Buttons/FilledButton";
import useOrganizationStore from "../../../store/useOrgProfile";
import Heading from "./../../../ui/Typography/Heading/Heading";
import { useRef } from "react";

const steps = [
  {
    title: "Organization Info",
    subtitle:
      "Please fill out the following information to set up your organization profile on Fluffy Paw.",
    action: "setInfo",
    fields: [
      { name: "Name", type: "text", placeholder: "Enter organization name" },
      { name: "Email", type: "email", placeholder: "Enter organization email" },
      {
        name: "Location",
        type: "text",
        placeholder: "Enter organization location",
      },
      {
        name: "Website",
        type: "text",
        placeholder: "Enter organization website",
      },
    ],
    initialValues: {
      name: "",
      email: "",
      location: "",
      website: "",
    },
  },
  {
    title: "Documents",
    subtitle: "Upload the necessary documents to verify your organization.",
    action: "setDocuments",
    fields: [
      {
        name: "Business License",
        type: "file",
        placeholder: "Upload business license",
      },
      { name: "Tax ID", type: "file", placeholder: "Upload tax ID" },
      {
        name: "Insurance Certificate",
        type: "file",
        placeholder: "Upload insurance certificate",
      },
    ],
    initialValues: {
      business_license: null,
      tax_id: null,
      insurance_certificate: null,
    },
  },
];

const OrganizationSetup = () => {
  const formikRef = useRef();

  const nextForm = useOrganizationStore((state) => state.nextForm);
  const prevForm = useOrganizationStore((state) => state.prevForm);
  const currentFormIndex = useOrganizationStore(
    (state) => state.currentFormIndex
  );
  const setInfo = useOrganizationStore((state) => state.setInfo);

  //* Get the current step based on the currentFormIndex
  //* If currentFormIndex is 0, we show the organization license image
  const currentStep = steps[currentFormIndex - 1];

  const handleFormSubmit = (values) => {
    console.log(values); 
  };
  
  return (
    <div className="flex flex-col h-screen">
      <header className="p-10 font-bold text-2xl text-center text-primary-color-500 bg-light-color">
        Welcome to your organization's Fluffy Paw profile!
      </header>

      <div className="flex-1  flex justify-center items-center p-4">
        {currentFormIndex === 0 && (
          <img
            src={OrganizationLicenseImg}
            alt="Organization License"
            className="w-full max-w-96 object-contain"
          />
        )}

        {currentFormIndex > 0 && (
          <div className="w-full max-w-xl">
            <h2 className="text-header-md mb-4">{currentStep.title}</h2>
            <p className="text-sm text-gray-500 mb-6">{currentStep.subtitle}</p>
            <InfoForm
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
            if(currentFormIndex===0){
              nextForm();
            }
            else
              {formikRef.current.submitForm(); }
          }}
          disabled={currentFormIndex === steps.length}
        >
          Continue
        </FilledButton>
      </footer>
    </div>
  );
};
export default OrganizationSetup;
