import { Formik, Form } from "formik";
import InputField from "./InputField";
import FilledButton from "../../../ui/Buttons/FilledButton";

export default function PetFormStep({
  step,
  stepIndex,
  initialValues,
  validationSchema,
  onSubmit,
  onBack,
  isLast,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="space-y-6">
          {/* <h3 className="text-xl font-semibold mb-4">{step.title}</h3> */}

          {step.fields.map((field) => (
            <InputField key={field.name} {...field} />
          ))}

          <div className="flex justify-between items-center mt-6">
            {stepIndex > 0 ? (
              <FilledButton
                type="button"
                onClick={onBack}
                className="bg-gray-300 text-gray-800 hover:bg-gray-400"
              >
                Back
              </FilledButton>
            ) : (
              <span></span>
            )}

            <FilledButton type="submit" className="bg-primary-color text-white">
              {isLast ? "Finish" : "Continue"}
            </FilledButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}
