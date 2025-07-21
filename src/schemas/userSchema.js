import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
})

export const signupSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    firstName: Yup.string().required("First name is required").min(2, "First name must be at least 2 characters"),
    lastName: Yup.string().required("Second name is required").min(2, "Second name must be at least 2 characters"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(/[\W_]/, "Password must contain at least one special character")
})