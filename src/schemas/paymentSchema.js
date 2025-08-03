import * as Yup from "yup";

export const paymentSchema = Yup.object({
  cardNumber: Yup.string().required("Card number is required"),
  cardHolder: Yup.string().required("Card holder name is required"),
  expiry: Yup.string().required("Expiry date is required"),
  cvv: Yup.string()
    .length(3, "CVV must be 3 digits")
    .required("CVV is required"),
  saveCard: Yup.boolean(),
});
