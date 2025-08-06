import * as Yup from "yup";

export const reviewSchema = Yup.object({
  review: Yup.string()
    .min(20, "Review must be at least 20 characters")
    .required("Review is required"),

  rating: Yup.number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot exceed 5")
    .required("Rating is required"),

  petType: Yup.array()
    .of(Yup.string().oneOf(["cat", "dog"]))
    .min(1, "Select at least one pet type")
    .max(1, "Select only one pet type")
    .required("Please select  pet type")
    .ensure(),
});
