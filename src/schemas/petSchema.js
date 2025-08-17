import * as Yup from "yup";

export const petProfileSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  age: Yup.number().required("Age is required"),
  // gender: Yup.string().required("Gender is required"),
  gender: Yup.array()
    .of(Yup.string().oneOf(["male", "female"]))
    // .min(1, "Please select at least one pet type")
    .max(1, "Select **only** one gender")
    .required("Please select at least one gender")
    .ensure(),
  desexed: Yup.string().required("Required"),
  type: Yup.array()
    .of(Yup.string().oneOf(["cat", "dog"]))
    // .min(1, "Please select at least one pet type")
    .max(1, "Select **only** one pet type")
    .required("Please select at least one pet type")
    .ensure(),
});

export const petTraitsSchema = Yup.object({
  toilet: Yup.string().required("Required"),
  diet: Yup.string().required("Required"),
  breed: Yup.string().required("Required"),
  friendly: Yup.string().required("Required"),
});

export const petHealthSchema = Yup.object({
  vaccinations: Yup.string().required("Required"),
  conditions: Yup.string().required("Required"),
  weight: Yup.number().required("Required"),
});

export const petPhotoSchema = Yup.object({
  photo: Yup.mixed().required("Photo is required"),
});
