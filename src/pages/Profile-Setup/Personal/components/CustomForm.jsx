import { Form, Formik } from "formik";
import React from "react";
import usePersonalFormStore from "../../../../store/usePersonalProfile";
import MyTextInput from "../../../../ui/Inputs/MyTextInput";
import MyFileInput from "../../../../ui/Inputs/MyFileInput";

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
              {field.type !== "file" && (
                <MyTextInput
                  key={field.name}
                  label={field.name}
                  name={field.name.toLowerCase().replace(/\s+/g, "_")}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              )}
              {field.type === "file" && (
                <MyFileInput
                  key={field.name}
                  label={field.name}
                  name={field.name.toLowerCase().replace(/\s+/g, "_")}
                />
              )}
              {/* {field.type === "file" && (
                <MyFileInput
                  key={field.name}
                  label={field.name}
                  name={field.name.toLowerCase().replace(/\s+/g, "_")}
                />
              )} */}
            </>
          ))}
        </Form>
      )}
    </Formik>
  );
}

export default CustomForm;
