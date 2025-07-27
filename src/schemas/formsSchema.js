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