import * as Yup from "yup";

export const petProfileSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  age: Yup.number().required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  desexed: Yup.string().required("Required"),
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
