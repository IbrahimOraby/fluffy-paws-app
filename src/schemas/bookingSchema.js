import * as Yup from "yup";

export const bookingSchema = Yup.object().shape({
  // petType: Yup.string().required("Select pet type"),
  petCount: Yup.number().min(1).required("Enter pet count"),
  fromDate: Yup.date()
    .required("Select start date")
    .max(Yup.ref("toDate"), "start date must be before end date"),
  toDate: Yup.date()
    .min(Yup.ref("fromDate"), "End date must be after start date")
    .required("Select end date"),
});
