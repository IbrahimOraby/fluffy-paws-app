import React from "react";
import { Formik, Form } from "formik";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import Heading from "../../../ui/Typography/Heading/Heading";
import { bookingSchema } from "../../../schemas/bookingDetailsSchema";
import FilledButton from "../../../ui/Buttons/FilledButton";
import PetCard from "./PetCard";
import FormikCalendarInput from "./FormikCalendarInput";
import MyTextInput from "../../../ui/Inputs/MyTextInput";

export default function BookingDetailsForm({ setCurrentStep }) {
  return (
    <Formik
      initialValues={{
        location: "",
        fromDate: "",
        toDate: "",
      }}
      validationSchema={bookingSchema}
      onSubmit={(values) => {
        setCurrentStep(2);
      }}
    >
      {() => (
        <Form className="flex flex-col gap-4 w-full">
          <Heading className="text-lg font-semibold mb-3">
            Booking details
          </Heading>

          {/* Location input */}
          <MyTextInput name="location" label="" placeholder="Location" />

          {/* Date pickers */}
          <div className="flex flex-col sm:flex-row gap-2 w-full justify-around mb-4">
            <FormikCalendarInput name="fromDate" />
            <FormikCalendarInput name="toDate" />
          </div>

          {/* Info text */}
          <Paragraph className="text-sm text-gray-500 text-center sm:text-left">
            Make sure your pet profile is complete before sending request
          </Paragraph>

          {/* Pet cards */}
          <div className="flex gap-2 flex-wrap">
            <PetCard />
          </div>

          {/* Submit */}
          <FilledButton
            type="submit"
            className="bg-primary-color text-white rounded-xl w-full"
          >
            Book now
          </FilledButton>
        </Form>
      )}
    </Formik>
  );
}
