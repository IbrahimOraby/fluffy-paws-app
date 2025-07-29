import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import usePersonalFormStore from "../../../../store/usePersonalProfile";
import MyTextInput from "../../../../ui/Inputs/MyTextInput";
import MyFileInput from "../../../../ui/Inputs/MyFileInput";
import { MyRadioInput } from "../../../../ui/Inputs/MyRadioInput";
import { MyCheckboxInput } from "../../../../ui/Inputs/MyCheckboxInput";
import MyTextArea from "../../../../ui/Inputs/MyTextArea";

function CustomForm({ fields, initialValues, formikRef, handleFormSubmit }) {
  const nextForm = usePersonalFormStore((state) => state.nextForm);
  console.log(fields);

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      onSubmit={(values) => {
        handleFormSubmit(values);
        nextForm();
      }}
    >
      {() => (
        <Form className="flex flex-col gap-4">
          {fields.map((field) => (
            <>
              {field.type === "text" || field.type === "tel" ? (
                <MyTextInput
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              ) : null}
              {field.type === "file" && (
                <MyFileInput
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                />
              )}
              {field.type === "radio" && (
                <div className="flex flex-row flex-wrap gap-4">
                  {field.options.map((option) => (
                    <MyRadioInput
                      key={option}
                      label={option}
                      value={option}
                      name={field.name}
                    />
                  ))}

                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-error text-sm mt-1 h-5"
                  />
                </div>
              )}
              {field.type === "checkbox" && (
                <div className="flex flex-row flex-wrap gap-4">
                  {field.options.map((option) => (
                    <MyCheckboxInput
                      key={option}
                      label={option}
                      value={option}
                      name={field.name}
                    />
                  ))}

                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-error text-sm mt-1 h-5"
                  />
                </div>
              )}
              {field.type === "textarea" && (
                <MyTextArea
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              )}
            </>
          ))}
        </Form>
      )}
    </Formik>
  );
}

export default CustomForm;
