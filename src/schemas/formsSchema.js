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
  website: Yup.string().matches(websiteRegex, 'Example url: anything.com ').required("Website is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),

  petTypes: Yup.array()
    .min(1, "At least one pet type must be selected")
    .required("Pet preference is required"),

});

export const documentsSchema = Yup.object({})
  .shape({
    businessLicense: Yup.mixed().required("Business license is required"),
    taxId: Yup.mixed().required("Tax ID is required"),
    insuranceCertificate: Yup.mixed().required("Insurance certificate is required"),
  });
  export const bankingSchema = Yup.object({
    accountHolderName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Account holder name is required"),
  
    bankName: Yup.string()
      .min(2, "Bank name is too short")
      .required("Bank name is required"),
  
    accountNumber: Yup.string()
      .matches(/^\d{10,20}$/, "Account number must be 10–20 digits")
      .required("Account number is required"),
  
    bankRoutingNumber: Yup.string()
      .matches(/^\d{6,12}$/, "Routing number must be 6–12 digits")
      .required("Routing number is required"),
  
    iban: Yup.string()
      .matches(/^EG[0-9]{27}$/, "IBAN must start with 'EG' and be 29 characters")
      .required("IBAN is required"),
  });
  
  export const contactSchema = Yup.object({
  phoneNumber: Yup.string()
    .matches(/^(?:\+20|0020|0)?1[0125][0-9]{8}$/, "Must be a valid Egyptian phone number")
    .required("Phone number is required"),
  city: Yup.string()
    .required("City is required"),

  district: Yup.string()
    .required("District is required"),

  street: Yup.string()
    .required("Street is required"),

  postlCode: Yup.string()
    .required("Postal code is required")
    .matches(/^\d{5}$/, "Postal code must be 5 digits"),
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