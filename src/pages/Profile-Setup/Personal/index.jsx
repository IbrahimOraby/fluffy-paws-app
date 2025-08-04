import React, { useRef, useState } from "react";
import FilledButton from "../../../ui/Buttons/FilledButton";
import PersonalLicenseImg from "../../../assets/images/personal-license.png";
import usePersonalFormStore from "../../../store/usePersonalProfile";
import CustomForm from "./components/CustomForm";
import {
  personalAboutMeSchema,
  personalAvailabilityFrequencySchema,
  personalContactSchema,
  personalExperienceSchema,
  personalHomeInfoSchema,
  personalPetPreferencesSchema,
  personalProfileSetupSchema,
} from "../../../schemas/formsSchema";

function PersonalSetup() {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const formikRef = useRef();
  const nextForm = usePersonalFormStore((state) => state.nextForm);
  const prevForm = usePersonalFormStore((state) => state.prevForm);
  const currentFormIndex = usePersonalFormStore(
    (state) => state.currentFormIndex
  );

  const setPersonalState = usePersonalFormStore((state) => state);
  const personalFormData = usePersonalFormStore(
    (state) => state.personalFormData
  );

  const steps = [
    {
      title: "Help Pet Owners Contact You",
      subtitle:
        "Please fill out the following information to set up your organization profile on Fluffy Paw.",
      action: "setContact",
      fields: [
        {
          name: "phoneNumber",
          label: "Phone Number",
          type: "text",
          placeholder: "e.g. 01098880000",
        },
        {
          name: "city",
          label: "City",
          type: "select",
          placeholder: "select your city ",
        },
        {
          name: "district",
          label: "District",
          type: "text",
          placeholder: "Enter your district",
        },
        {
          name: "street",
          label: "Street",
          type: "text",
          placeholder: "Enter your street",
        },
        {
          name: "postlCode",
          label: "Postal Code",
          type: "text",
          placeholder: "Enter your postal code",
        },
        {
          name: "socialMediaAccount",
          label: "Social Media Account*",
          type: "text",
          placeholder:
            "Enter a social media account, e.g., instagram.com/yourusername",
        },
      ],
      initialValues: {
        phoneNumber: personalFormData.contact?.phoneNumber || "",
        city: personalFormData.contact?.city || "",
        district: personalFormData.contact?.district || "",
        street: personalFormData.contact?.street || "",
        postlCode: personalFormData.contact?.postlCode || "",
        socialMediaAccount: personalFormData.contact?.socialMediaAccount || "",
      },
      schema: personalContactSchema,
    },
    {
      title: "Availability",
      subtitle: "Let us know how often you're available to care for pets.",
      action: "setAvailabilityFrequency",
      fields: [
        {
          name: "availableDays",
          label: "How often are you available to look after pets?",
          type: "radio",
          options: [
            "Daily / Full-time",
            "A few times a week",
            "Once a week",
            "Once a month",
            "Not sure yet",
          ],
        },
      ],
      initialValues: {
        availableDays:
          personalFormData.availabilityFrequency?.availableDays || "",
      },
      schema: personalAvailabilityFrequencySchema,
    },
    {
      title: "Pet Preferences",
      subtitle: "Select the types of pets you're comfortable caring for.",
      action: "setPetPreferences",
      fields: [
        {
          name: "petTypes",
          label: "Which pets can you look after?",
          type: "checkbox",
          options: ["Dogs", "Cats"],
        },
      ],
      initialValues: {
        petTypes: personalFormData.petPreferences?.petTypes || "",
      },
      schema: personalPetPreferencesSchema,
    },
    {
      title: "Experience",
      subtitle: "Tell us about your experience in pet care.",
      action: "setExperience",
      fields: [
        {
          name: "yearsExperience",
          label: "Years of Experience",
          type: "text",
          placeholder: "e.g., 2 (enter the number of years)",
        },
        {
          name: "price",
          label: "Boarding Price (EGP per night)",
          type: "text",
          placeholder: "e.g., 250",
        },
      ],
      initialValues: {
        yearsExperience: personalFormData.experience?.yearsExperience || "",
        price:personalFormData.experience?.price || "",
      },
      schema: personalExperienceSchema,
    },
    {
      title: "Home Information",
      subtitle: "Tell us about your home and the people living with you.",
      action: "setHomeInfo",
      fields: [
        {
          name: "homeType",
          label: "What type of home do you live in?",
          type: "radio",
          options: ["An Apartment", "A House"],
        },
        {
          name: "hasKids",
          label: "Do you have kids at home?",
          type: "radio",
          options: ["Yes", "No"],
        },
      ],
      initialValues: {
        homeType: personalFormData.homeInfo?.homeType || "",
        hasKids: personalFormData.homeInfo?.hasKids || "",
      },
      schema: personalHomeInfoSchema,
    },
    {
      title: "Upload Your Photo and ID",
      subtitle: "Introduce yourself to pet owners and confirm your identity.",
      action: "setProfileSetup",
      fields: [
        {
          name: "profilePicture",
          type: "file",
          label: "Profile Picture",
          placeholder: "Upload your profile picture",
        },
        {
          name: "personalId",
          type: "file",
          label: "Personal ID",
          placeholder: "Upload your ID",
        },
      ],
      initialValues: {
        profilePicture: personalFormData.profileSetup?.profilePicture || "",
        personalId: personalFormData.profileSetup?.personalId || "",
      },
      schema: personalProfileSetupSchema,
    },
    {
      title: "Tell Us About Yourself",
      subtitle:
        "Let pet owners know a little more about you — this will appear in your profile.",
      action: "setAboutMe",
      fields: [
        {
          name: "bio",
          label: "About Me",
          placeholder: "Write a short introduction about yourself...",
          type: "textarea",
        },
      ],
      initialValues: {
        bio: personalFormData.aboutMe?.bio || "",
      },
      schema: personalAboutMeSchema,
    },
  ];

  const currentStep = steps[currentFormIndex - 1];
  const isLastStep = currentFormIndex === steps.length;

  const handlePersonalFormSubmit = (values) => {
    console.log(values);
    setPersonalState[currentStep.action](values);
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
            alt="Personal License"
            className="w-full max-w-96 object-contain"
          />
        )}

        {currentFormIndex > 0 && (
          <div className="w-full max-w-xl">
            <div className="mb-6">
              <h2 className="text-header-md mb-1">{currentStep.title}</h2>
              <p className="text-sm text-gray-500">{currentStep.subtitle}</p>
            </div>
            <CustomForm
              fields={currentStep.fields}
              initialValues={currentStep.initialValues}
              formikRef={formikRef}
              schema={currentStep.schema}
              isLastForm={isLastStep}
              currentForm={currentStep}
              setIsFormSubmitting={setIsFormSubmitting}
              handlePersonalFormSubmit={handlePersonalFormSubmit}
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
          className="text-white bg-primary-color 
          hover:bg-primary-color-500 hover:bg-primary-color-700 rounded-4xl"
          disabled={isFormSubmitting}
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
}

export default PersonalSetup;
