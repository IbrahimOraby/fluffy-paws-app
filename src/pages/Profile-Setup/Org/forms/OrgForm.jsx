import { ErrorMessage, Form, Formik } from "formik";
import MyTextInput from "../../../../ui/Inputs/MyTextInput";
import MyFileInput from "../../../../ui/Inputs/MyFileInput";
import useOrganizationStore from "../../../../store/useOrgProfile";
import { useNavigate } from "react-router";
import { addOrgnizationDoc } from "../../../../services/firestore_service";
import useUserStore from "./../../../../store/useUserStore";
import MySelectInput from "../../../../ui/Inputs/MySelectInput";
import { currentDate, oneYearLater } from "../../../../utils/dateHelpers";
import { MyCheckboxInput } from "./../../../../ui/Inputs/MyCheckboxInput";

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
        console.log(values);
        handleFormSubmit(values);
        setIsFormSubmitting(true);
        if (isLastForm) {
          const finalOrgData = {
            ...orgData,
            branding: values,
            availableFrom: currentDate.toISOString(),
            availableTo: oneYearLater.toISOString(),
            isAuthenticated: false,
            uid:user.uid,
          };
          await addOrgnizationDoc(finalOrgData, user.uid);
          setIsFormSubmitting(false);
          // localStorage.removeItem('organization-storage');
        setTimeout(() => {
          resetForm();
        }, 1000);
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
              {(field.type === "text" || field.type === "email") && (
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

              {field.type === "select" && (
                <MySelectInput
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                >
                  <option value="">Select a governorate</option>
                  <option value="Cairo">Cairo</option>
                  <option value="Giza">Giza</option>
                  <option value="Alexandria">Alexandria</option>
                  <option value="Dakahlia">Dakahlia</option>
                  <option value="Red Sea">Red Sea</option>
                  <option value="Beheira">Beheira</option>
                  <option value="Fayoum">Fayoum</option>
                  <option value="Gharbia">Gharbia</option>
                  <option value="Ismailia">Ismailia</option>
                  <option value="Monufia">Monufia</option>
                  <option value="Minya">Minya</option>
                  <option value="Qaliubiya">Qaliubiya</option>
                  <option value="New Valley">New Valley</option>
                  <option value="Suez">Suez</option>
                  <option value="Aswan">Aswan</option>
                  <option value="Assiut">Assiut</option>
                  <option value="Beni Suef">Beni Suef</option>
                  <option value="Port Said">Port Said</option>
                  <option value="Damietta">Damietta</option>
                  <option value="Sharkia">Sharkia</option>
                  <option value="South Sinai">South Sinai</option>
                  <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                  <option value="Matrouh">Matrouh</option>
                  <option value="Luxor">Luxor</option>
                  <option value="Qena">Qena</option>
                  <option value="North Sinai">North Sinai</option>
                  <option value="Sohag">Sohag</option>
                </MySelectInput>
              )}
              {field.type === "checkbox" && (
                <div className="mb-4">
                  <h3 className="text-subheader-lg mb-1">{field.label}</h3>
                  <div className="flex flex-row flex-wrap gap-4">
                    {field.options.map((option) => (
                      <MyCheckboxInput
                        key={option}
                        label={option}
                        value={option}
                        name={field.name}
                      />
                    ))}
                  </div>
                  <div className="min-h-[20px] mt-1">
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-error text-sm"
                    />
                  </div>
                </div>
              )}
            </>
          ))}
        </Form>
      )}
    </Formik>
  );
};

export default OrgForm;
