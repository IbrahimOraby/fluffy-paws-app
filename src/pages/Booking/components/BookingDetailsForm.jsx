import React from "react";
import { Formik, Form } from "formik";
import IconPlaceholderInput from "../../../ui/Inputs/Iconplaceholderinput";
import { StaticMapIcon } from "../../../ui/Icons/StaticIcons";
import CalendarInput from "../../../ui/Inputs/CalendarInput";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import Heading from "../../../ui/Typography/Heading/Heading";
import { bookingSchema } from "../../../schemas/bookingSchema";
import FilledButton from "../../../ui/Buttons/FilledButton";
import PetCard from "./PetCard";

export default function BookingDetailsForm() {
  return (
    <Formik
      initialValues={{
        location: "",
        fromDate: "",
        toDate: "",
      }}
      validationSchema={bookingSchema}
      onSubmit={(values) => {
        console.log("Booking form submitted:", values);
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="flex flex-col gap-2 w-full">
          <Heading className="text-lg font-semibold mb-3">
            Booking details
          </Heading>

          {/* Location Input */}
          <div className="w-full">
            <IconPlaceholderInput
              name="location"
              icon={<StaticMapIcon color="#be5985" />}
              placeholder="Location"
              value={values.location}
              onChange={(e) => setFieldValue("location", e.target.value)}
            />
            {errors.location && touched.location && (
              <p className="text-red-500 text-xs mt-1">{errors.location}</p>
            )}
          </div>

          {/* Date Range Inputs */}
          <div className="flex flex-col sm:flex-row gap-2 w-full justify-around">
            <CalendarInput
              name="fromDate"
              value={values.fromDate}
              onChange={(val) => setFieldValue("fromDate", val)}
              placeholder="From"
            />
            <CalendarInput
              name="toDate"
              value={values.toDate}
              onChange={(val) => setFieldValue("toDate", val)}
              placeholder="To"
            />
          </div>

          {errors.fromDate && touched.fromDate && (
            <p className="text-red-500 text-xs">{errors.fromDate}</p>
          )}
          {errors.toDate && touched.toDate && (
            <p className="text-red-500 text-xs">{errors.toDate}</p>
          )}

          {/* Info text */}
          <Paragraph className="text-sm text-gray-500 text-center sm:text-left">
            Make sure your pet profile is complete before sending request
          </Paragraph>

          {/* Pet Info */}
          <div className="flex gap-2 flex-wrap">
            <PetCard />
          </div>

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
