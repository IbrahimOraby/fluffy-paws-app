import * as Yup from "yup";

export const bookingSchema = Yup.object().shape({
  // petType: Yup.string().required("Select pet type"),
  petCount: Yup.number().min(1).required("Enter pet count"),
  fromDate: Yup.date().required("Select start date"),
  toDate: Yup.date().required("Select end date"),
});
