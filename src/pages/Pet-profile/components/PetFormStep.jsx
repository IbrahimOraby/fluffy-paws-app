import { Formik, Form } from "formik";
import InputField from "./InputField";
import FilledButton from "../../../ui/Buttons/FilledButton";
import MyFileInput from "../../../ui/Inputs/MyFileInput";

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
      {({ setFieldValue }) => (
        <Form className="space-y-6">
          {/* Loop through fields and render inputs */}
          {step.fields.map((field) => {
            if (field.type === "file") {
              return (
                <MyFileInput
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type="file"
                />
              );
            } else {
              return <InputField key={field.name} {...field} />;
            }
          })}

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
