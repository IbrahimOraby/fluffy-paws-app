import React, { useRef } from "react";
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
  personalProfileSetupSchema
} from "../../../schemas/formsSchema";

function PersonalSetup() {
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
          name: "address",
          label: "Address",
          type: "text",
          placeholder: "Enter your address"
        },
        {
          name: "phoneNumber",
          label: "Phone Number",
          type: "tel",
          placeholder: "Enter your phone number"
        },
        {
          name: "socialMediaAccount",
          label: "Social Media Account",
          type: "text",
          placeholder:
            "Enter a social media account, e.g., instagram.com/yourusername"
        }
      ],
      initialValues: {
        address: personalFormData.contact?.address || "",
        phoneNumber: personalFormData.contact?.phoneNumber || "",
        socialMediaAccount: personalFormData.contact?.socialMediaAccount || ""
      },
      schema: personalContactSchema
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
            "Not sure yet"
          ]
        }
      ],
      initialValues: {
        availableDays:
          personalFormData.availabilityFrequency?.availableDays || ""
      },
      schema: personalAvailabilityFrequencySchema
    },
    {
      title: "Pet Preferences",
      subtitle: "Select the types of pets you're comfortable caring for.",
      action: "setPetPreferences",
      fields: [
        {
          name: "petType",
          label: "Which pets can you look after?",
          type: "checkbox",
          options: ["Dogs", "Cats"]
        }
      ],
      initialValues: {
        petType: personalFormData.petPreferences?.petType || ""
      },
      schema: personalPetPreferencesSchema
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
          placeholder: "e.g., 2 (enter the number of years)"
        }
      ],
      initialValues: {
        yearsExperience: personalFormData.experience?.yearsExperience || ""
      },
      schema: personalExperienceSchema
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
          options: ["An Apartment", "A House"]
        },
        {
          name: "householdInfo",
          label: "Do you have kids at home?",
          type: "radio",
          options: ["Yes", "No"]
        }
      ],
      initialValues: {
        homeType: personalFormData.homeInfo?.homeType || "",
        householdInfo: personalFormData.homeInfo?.householdInfo || ""
      },
      schema: personalHomeInfoSchema
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
          placeholder: "Upload your profile picture"
        },
        {
          name: "personalId",
          type: "file",
          label: "Personal ID",
          placeholder: "Upload your ID"
        }
      ],
      initialValues: {
        profilePicture: personalFormData.profileSetup?.profilePicture || "",
        personalId: personalFormData.profileSetup?.personalId || ""
      },
      schema: personalProfileSetupSchema
    },
    {
      title: "Tell Us About Yourself",
      subtitle: "This will appear in the 'About Me' section of your profile.",
      action: "setAboutMe",
      fields: [
        {
          name: "bio",
          label: "About Me",
          placeholder: "Write a short introduction about yourself...",
          type: "textarea"
        }
      ],
      initialValues: {
        bio: personalFormData.aboutMe?.bio || ""
      },
      schema: personalAboutMeSchema
    }
  ];

  // const setAboutMe = usePersonalFormStore((state) => state.setAboutMe);
  // const setAvailabilityFrequency = usePersonalFormStore((state) => state.setAvailabilityFrequency);
  // const setPetPreferences = usePersonalFormStore((state) => state.setPetPreferences);
  // const setExperience = usePersonalFormStore((state) => state.setExperience);
  // const setHomeInfo = usePersonalFormStore((state) => state.setHomeInfo);
  // const setProfileSetup = usePersonalFormStore((state) => state.setProfileSetup);
  // const setContact = usePersonalFormStore((state) => state.setContact);

  const currentStep = steps[currentFormIndex - 1];
  const isLastStep = currentFormIndex === steps.length;

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
          className="text-white bg-primary-color hover:bg-primary-color-500 hover:bg-primary-color-700 rounded-4xl"
          onClick={() => {
            if (currentFormIndex === 0) {
              nextForm();
            } else {
              formikRef.current.submitForm();
            }
          }}
          disabled={currentFormIndex === steps.length}
        >
          Next
        </FilledButton>
      </footer>
    </div>
  );
}

export default PersonalSetup;
