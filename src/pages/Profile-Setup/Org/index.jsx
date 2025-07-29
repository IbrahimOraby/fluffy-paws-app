import OrgForm from "./../Org/forms/OrgForm";
import OrganizationLicenseImg from "../../../assets/images/organization-license.png";
import FilledButton from "../../../ui/Buttons/FilledButton";
import useOrganizationStore from "../../../store/useOrgProfile";
import { useRef, useState } from "react";
import {
  bankingSchema,
  brandingSchema,
  contactSchema,
  documentsSchema,
  infoSchema,
} from "../../../schemas/formsSchema";
import { handleOrgFormSubmit } from "../../../handlers/customizationHandlers";

const OrganizationSetup = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const formikRef = useRef();
  const nextForm = useOrganizationStore((state) => state.nextForm);
  const prevForm = useOrganizationStore((state) => state.prevForm);
  const currentFormIndex = useOrganizationStore(
    (state) => state.currentFormIndex
  );
  const setOrgState = useOrganizationStore((state) => state);
  const organizationData = useOrganizationStore(
    (state) => state.organizationData
  );
  const steps = [
    {
      title: "Organization Info",
      subtitle:
        "Please fill out the following information to set up your organization profile on Fluffy Paw.",
      action: "setInfo",
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          placeholder: "Enter organization name",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "Enter organization email",
        },
        {
          name: "location",
          label: "Location",
          type: "text",
          placeholder: "Enter organization location",
        },
        {
          name: "website",
          label: "Website",
          type: "text",
          placeholder: "Enter organization website",
        },
      ],
      initialValues: {
        name: organizationData.info?.name || "",
        email: organizationData.info?.email || "",
        location: organizationData.info?.location || "",
        website: organizationData.info?.website || "",
      },
      schema: infoSchema,
    },
    {
      title: "Documents",
      subtitle: "Upload the necessary documents to verify your organization.",
      action: "setDocuments",
      fields: [
        {
          name: "businessLicense",
          label: "Business License",
          type: "file",
          placeholder: "Upload business license",
        },
        {
          name: "taxId",
          label: "Tax ID",
          type: "file",
          placeholder: "Upload tax ID",
        },
        {
          name: "insuranceCertificate",
          label: "Insurance Certificate",
          type: "file",
          placeholder: "Upload insurance certificate",
        },
      ],
      initialValues: {
        businessLicense: organizationData.documents?.businessLicense || null,
        taxId: organizationData.documents?.taxId || null,
        insuranceCertificate:
          organizationData.documents?.insuranceCertificate || null,
      },
      schema: documentsSchema,
    },
    {
      title: "Banking Data",
      subtitle: "Provide your data to facilitate booking online",
      action: "setBanking",
      fields: [
        {
          name: "accountHolderName",
          label: "Account Holder Name",
          type: "text",
          placeholder: "Enter account holder name",
        },
        {
          name: "bankName",
          label: "Bank Name",
          type: "text",
          placeholder: "Enter bank name",
        },
        {
          name: "accountNumber",
          label: "Account Number",
          type: "text",
          placeholder: "Enter account number",
        },
        {
          name: "bankRoutingNumber",
          label: "Bank Routing Number",
          type: "text",
          placeholder: "Enter bank routing number",
        },
        {
          name: "iban",
          label: "IBAN",
          type: "text",
          placeholder: "Enter IBAN",
        },
      ],
      initialValues: {
        accountHolderName: organizationData.banking?.accountHolderName || "",
        bankName: organizationData.banking?.bankName || "",
        accountNumber: organizationData.banking?.accountNumber || "",
        bankRoutingNumber: organizationData.banking?.bankRoutingNumber || "",
        iban: organizationData.banking?.iban || "",
      },
      schema: bankingSchema,
    },
    {
      title: "Contact & Representative",
      subtitle: "Help users find you easily",
      action: "setContact",
      fields: [
        {
          name: "phoneNumber",
          label: "Phone Number",
          type: "text",
          placeholder: "Enter phone number",
        },
        {
          name: "whatsAppNumber",
          label: "WhatsApp Number",
          type: "text",
          placeholder: "Enter WhatsApp number",
        },
        {
          name: "responsiblePersonName",
          label: "Responsible Person Name",
          type: "text",
          placeholder: "Enter responsible person name",
        },
        {
          name: "responsiblePersonId",
          label: "Responsible Person ID",
          type: "file",
          placeholder: "Upload responsible person ID",
        },
      ],
      initialValues: {
        phoneNumber: organizationData.contact?.phoneNumber || "",
        whatsAppNumber: organizationData.contact?.whatsAppNumber || "",
        responsiblePersonName:
          organizationData.contact?.responsiblePersonName || "",
        responsiblePersonId:
          organizationData.contact?.responsiblePersonId || null,
      },
      schema: contactSchema,
    },
    {
      title: "Branding",
      subtitle:
        "Present your organization professionally to help users trust you.",
      action: "setBranding",
      fields: [
        {
          name: "organizationLogo",
          label: "Organization Logo",
          type: "file",
          placeholder: "Upload organization logo",
        },
        {
          name: "description",
          label: "Description",
          type: "text",
          placeholder: "Enter organization description",
        },
        {
          name: "instagramLink",
          label: "Instagram Link",
          type: "text",
          placeholder: "Enter Instagram profile link",
        },
      ],
      initialValues: {
        organizationLogo: organizationData.branding?.organizationLogo || null,
        description: organizationData.branding?.description || "",
        instagramLink: organizationData.branding?.instagramLink || "",
      },
      schema: brandingSchema,
    },
  ];
  //* Get the current step based on the currentFormIndex
  //* If currentFormIndex is 0, we show the organization license image
  const currentStep = steps[currentFormIndex - 1];
  const isLastStep = currentFormIndex === steps.length;
  console.log(currentStep)

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
            <OrgForm
              fields={currentStep.fields}
              initialValues={currentStep.initialValues}
              schema={currentStep.schema}
              formikRef={formikRef}
              isLastForm={isLastStep}
              currentForm={currentStep}
              setIsFormSubmitting={setIsFormSubmitting}
              handleFormSubmit={() => {
                handleOrgFormSubmit(
                  formikRef.current.values,
                  currentStep,
                  setOrgState
                );
              }}
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
          disabled={isFormSubmitting}
          className="text-white bg-primary-color hover:bg-primary-color-500 hover:bg-primary-color-700 rounded-4xl"
          onClick={() => {
            if (currentFormIndex === 0) {
              nextForm();
            } else {
              formikRef.current.submitForm();
            }
          }}
        >
         {!isLastStep ? "Next" : isFormSubmitting ? "Submitting..." : "Submit"}
        </FilledButton>
      </footer>
    </div>
  );
};
export default OrganizationSetup;
