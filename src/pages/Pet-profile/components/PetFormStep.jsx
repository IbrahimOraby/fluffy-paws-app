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
                className=" text-primary-color-500 hover:text-primary-color-700 rounded-4xl border-primary-color-500"
              >
                Previous
              </FilledButton>
            ) : (
              <span></span>
            )}

            <FilledButton
              type="submit"
              className="bg-primary-color rounded-4xl text-white"
            >
              {isLast ? "Finish" : "Continue"}
            </FilledButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}
