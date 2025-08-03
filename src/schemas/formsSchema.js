import * as Yup from "yup";

const websiteRegex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm
//! example valid website URLs
//! anything.com
//! www.anything.com
//! uptime-monitor-fe.anything.app
//! https://uptime-monitor-fe.anything.app/
const instagramRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_.]+\/?$/;
//! example valid instagram URLs
//! https://www.instagram.com/username/

export const infoSchema = Yup.object({
    name: Yup.string()
        .required("Organization name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    location: Yup.string()
        .required("Location is required"),
    website: Yup.string().matches(websiteRegex, 'Example url: anything.com ').required("Website is required"),
});

export const documentsSchema = Yup.object({})
    .shape({
        businessLicense: Yup.mixed().required("Business license is required"),
        taxId: Yup.mixed().required("Tax ID is required"),
        insuranceCertificate: Yup.mixed().required("Insurance certificate is required"),
    });
export const bankingSchema = Yup.object({
    accountHolderName: Yup.string().required("Account holder name is required"),
    bankName: Yup.string().required("Bank name is required"),
    accountNumber: Yup.string().required("Account number is required"),
    bankRoutingNumber: Yup.string().required("Routing number is required"),
    iban: Yup.string().required("IBAN is required"),
})
export const contactSchema = Yup.object({
    phoneNumber: Yup.string().required("Phone number is required"),
    whatsAppNumber: Yup.string().required("WhatsApp number is required"),
    responsiblePersonName: Yup.string().required("Responsiple person name is required"),
    responsiblePersonId: Yup.mixed().required("Responsible person id is required"),
})

export const brandingSchema = Yup.object({
    organizationLogo: Yup.mixed().required("Logo is required"),
    description: Yup.string().required("description is required"),
    instagramLink: Yup.string().matches(instagramRegex, 'Example : https://www.instagram.com/username').required("Instagram link is required"),
})

//personal sitter schemas

export const personalContactSchema = Yup.object({
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .matches(/^01[0125][0-9]{8}$/, "Must be a valid Egyptian phone number")
    .required("Phone number is required"),
  socialMedia: Yup.string().url("Must be a valid URL").nullable(),
});

export const personalAvailabilityFrequencySchema = Yup.object({
  availableDays: Yup.string().required("Availability is required"),
});

export const personalPetPreferencesSchema = Yup.object({
  petTypes: Yup.array()
    .min(1, "At least one pet type must be selected")
    .required("Pet preference is required"),
});

export const personalExperienceSchema = Yup.object({
   yearsExperience: Yup.number()
    .typeError("Experience must be a number")
    .min(0, "Experience must be a positive number")
    .required("Experience is required"),
});

export const personalHomeInfoSchema = Yup.object({
  homeType: Yup.string().required("Home type is required"),
  hasKids: Yup.string().required("Household info is required"),
});

export const personalProfileSetupSchema = Yup.object({
  profilePicture: Yup.mixed()
    .required("Profile picture is required"),
  personalId: Yup.mixed()
    .required("Personal ID is required"),
});

export const personalAboutMeSchema = Yup.object({
  bio: Yup.string().required("This field is required"),
});