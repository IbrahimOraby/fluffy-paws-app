import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../../../ui/Inputs/MyTextInput";
import { paymentSchema } from "../../../schemas/paymentSchema";
import FilledButton from "../../../ui/Buttons/FilledButton";

export default function PaymentForm() {
  return (
    <div className="w-full flex flex-col items-center">
      <Formik
        initialValues={{
          cardNumber: "",
          cardHolder: "",
          expiry: "",
          cvv: "",
          saveCard: false,
        }}
        validationSchema={paymentSchema}
        onSubmit={(values) => {
          console.log("Payment Data", values);
        }}
      >
        {({ values, handleChange }) => (
          <Form className="w-full max-w-md flex flex-col gap-3">
            {/* Card Info */}
            <MyTextInput
              label="Enter your card number"
              name="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
            />

            <MyTextInput
              label="Enter card holder name"
              name="cardHolder"
              type="text"
              placeholder="John Doe"
            />

            <div className="flex gap-3">
              <MyTextInput
                label="MM / YY"
                name="expiry"
                type="text"
                placeholder="09/28"
              />
              <MyTextInput
                label="CVV"
                name="cvv"
                type="text"
                placeholder="123"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name="saveCard"
                checked={values.saveCard}
                onChange={handleChange}
              />
              Save this card for future use
            </label>

            <FilledButton
              type="submit"
              className="bg-primary-color text-white rounded-xl w-full"
            >
              Pay now
            </FilledButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
