import { Form, Formik } from "formik";
import MyTextInput from "../../../../ui/Inputs/MyTextInput";
import MyFileInput from "../../../../ui/Inputs/MyFileInput";
import useOrganizationStore from "../../../../store/useOrgProfile";
import { useNavigate } from "react-router";

const InfoForm = ({
  fields,
  initialValues,
  schema,
  formikRef,
  handleFormSubmit,
  isLastForm,
}) => {
  const nextForm = useOrganizationStore((state) => state.nextForm);
  const navigate = useNavigate();
  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      validationSchema={schema}
      enableReinitialize
      onSubmit={(values) => {
        handleFormSubmit(values);
        if (isLastForm) {
          navigate("/");
        } else {
          nextForm();
        }
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
