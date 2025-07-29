import * as Yup from "yup";

export const bookingSchema = Yup.object().shape({
  location: Yup.string().required("Location is required"),
  fromDate: Yup.date().required("Start date is required"),
  toDate: Yup.date().required("End date is required"),
});
