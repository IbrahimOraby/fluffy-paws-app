import Dropdown from "../../../ui/Inputs/Dropdown";
import NumberInput from "../../../ui/Inputs/NumberInput";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import FilledButton from "../../../ui/Buttons/FilledButton";
import { bookingSchema } from "../../../schemas/bookingSchema";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import FormikCalendarInput from "../../Booking/components/FormikCalendarInput";
import { useEffect, useState } from "react";

export default function Booking({ shelterData, role }) {
  const navigate = useNavigate();
  const [price, setPrice] = useState(null);
  // const shelterData = data;

  // Compute nightly rate directly from shelterData + role
  useEffect(() => {
    const newPrice =
      role === "organization"
        ? shelterData?.info?.price
        : shelterData?.experience?.price;

    setPrice(newPrice);
  }, [role, shelterData]);

  return (
    <div className="w-full max-w-sm border border-gray-300 rounded-xl p-4 shadow-sm bg-white">
      <div className="mb-4">
        <Heading className="text-lg sm:text-xl font-semibold mb-2">
          Pet hosting
        </Heading>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <Paragraph>Your pet will stay at the hotel</Paragraph>
          {role === "organization" && (
            <Paragraph className="font-medium text-black">
              £{shelterData?.info.price || "99"}
            </Paragraph>
          )}
          {role === "personal" && (
            <Paragraph className="font-medium text-black">
              £{shelterData?.experience.price || "99"}
            </Paragraph>
          )}
        </div>
      </div>

      <Formik
        initialValues={{
          petCount: 1,
          fromDate: "",
          toDate: "",
        }}
        validationSchema={bookingSchema}
        onSubmit={(values) => {
          const payload = {
            shelter: shelterData,
            bookingForm: values,
          };
          navigate("/booking", {
            state: {
              shelter: { ...shelterData },
              bookingForm: values,
            },
          });
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className="space-y-1">
            {/* Pet Type Dropdown */}
            {/* <div>
              <Dropdown
                name="petType"
                options={["Cat", "Dog", "Kitten", "Puppy"]}
                value={values.petType}
                onChange={(val) => setFieldValue("petType", val)}
              />
              {errors.petType && touched.petType && (
                <div className="text-red-500 text-xs">{errors.petType}</div>
              )}
            </div> */}

            {/* Pet Count NumberInput */}
            <div>
              <NumberInput
                name="petCount"
                value={values.petCount}
                onChange={(val) => setFieldValue("petCount", val)}
              />
              {errors.petCount && touched.petCount && (
                <div className="text-red-500 text-xs">{errors.petCount}</div>
              )}
            </div>

            {/* From & To Date Pickers */}
            <div className="flex flex-row justify-center items-end gap-4 flex-wrap">
              <div className="w-full max-w-[160px]">
                <label className="block text-sm font-medium text-gray-700 mb-1 text-center">
                  From
                </label>
                <div className="flex justify-center">
                  <FormikCalendarInput
                    name="fromDate"
                    value={values.fromDate}
                    onChange={(val) => setFieldValue("fromDate", val)}
                  />
                </div>
                {errors.fromDate && touched.fromDate && (
                  <div className="text-red-500 text-xs text-center">
                    {errors.fromDate}
                  </div>
                )}
              </div>

              <div className="w-full max-w-[160px]">
                <label className="block text-sm font-medium text-gray-700 mb-1 text-center">
                  To
                </label>
                <div className="flex justify-center">
                  <FormikCalendarInput
                    name="toDate"
                    value={values.toDate}
                    onChange={(val) => setFieldValue("toDate", val)}
                  />
                </div>
                {errors.toDate && touched.toDate && (
                  <div className="text-red-500 text-xs text-center">
                    {errors.toDate}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col items-center">
              <FilledButton
                type="submit"
                className="bg-primary-color text-white rounded-xl w-full"
              >
                Book now
              </FilledButton>

              <Paragraph className="text-xs text-gray-500 mt-1 text-center">
                You will be redirected to payment page
              </Paragraph>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
