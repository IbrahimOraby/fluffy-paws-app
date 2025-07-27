import { Form, Formik } from "formik";
import MyTextInput from "../../../../ui/Inputs/MyTextInput";
import MyFileInput from "../../../../ui/Inputs/MyFileInput";
import useOrganizationStore from "../../../../store/useOrgProfile";

const InfoForm = ({
  fields,
  initialValues,
  schema,
  formikRef,
  handleFormSubmit,
}) => {
  const nextForm = useOrganizationStore((state) => state.nextForm);

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      validationSchema={schema}
      enableReinitialize 
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
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              )}
              {field.type === "file" && (
                <MyFileInput
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                />
              )}
            </>
          ))}
        </Form>
      )}
    </Formik>
  );
};

export default InfoForm;
