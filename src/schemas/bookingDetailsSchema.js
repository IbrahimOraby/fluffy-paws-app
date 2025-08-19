import * as Yup from "yup";

export const bookingSchema = Yup.object().shape({
  location: Yup.string().required("Location is required"),
  fromDate: Yup.date()
    .required("Start date is required")
    .max(Yup.ref("toDate"), "start date must be before end date"),
  toDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("fromDate"), "End date must be after start date"),
});
