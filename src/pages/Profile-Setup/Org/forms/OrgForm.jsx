import { Form, Formik } from "formik";
import MyTextInput from "../../../../ui/Inputs/MyTextInput";
import MyFileInput from "../../../../ui/Inputs/MyFileInput";
import useOrganizationStore from "../../../../store/useOrgProfile";
import { useNavigate } from "react-router";
import { addOrgnizationDoc } from "../../../../services/firestore_service";
import useUserStore from "./../../../../store/useUserStore";

const OrgForm = ({
  fields,
  initialValues,
  schema,
  formikRef,
  handleFormSubmit,
  isLastForm,
  setIsFormSubmitting,
}) => {
  const nextForm = useOrganizationStore((state) => state.nextForm);
  const user = useUserStore((state) => state.user);
  const orgData = useOrganizationStore((state) => state.organizationData);
  const resetForm = useOrganizationStore((state) => state.resetForm);
  const navigate = useNavigate();
  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      validationSchema={schema}
      enableReinitialize
      onSubmit={async (values) => {
        handleFormSubmit(values);
        setIsFormSubmitting(true);
        if (isLastForm) {
          await addOrgnizationDoc({ ...orgData }, user.uid);
          setIsFormSubmitting(false);
          resetForm();
          navigate("/");
        } else {
          nextForm();
        }
        setIsFormSubmitting(false);
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

export default OrgForm;
