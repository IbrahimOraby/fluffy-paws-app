import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import usePersonalFormStore from "../../../../store/usePersonalProfile";
import MyTextInput from "../../../../ui/Inputs/MyTextInput";
import MyFileInput from "../../../../ui/Inputs/MyFileInput";
import { MyRadioInput } from "../../../../ui/Inputs/MyRadioInput";
import { MyCheckboxInput } from "../../../../ui/Inputs/MyCheckboxInput";
import MyTextArea from "../../../../ui/Inputs/MyTextArea";
import { useNavigate } from "react-router";
import { addPersonalSitterDoc } from "../../../../services/firestore_service";
import useUserStore from "../../../../store/useUserStore";
import MySelectInput from "../../../../ui/Inputs/MySelectInput";
import { currentDate, oneYearLater } from "../../../../utils/dateHelpers";

function CustomForm({
  fields,
  initialValues,
  formikRef,
  schema,
  isLastForm,
  handlePersonalFormSubmit,
  setIsFormSubmitting,
}) {
  const nextForm = usePersonalFormStore((state) => state.nextForm);
  const user = useUserStore((state) => state.user);
  const personalFormData = usePersonalFormStore(
    (state) => state.personalFormData
  );
  const navigate = useNavigate();
  const resetForm = usePersonalFormStore((state) => state.resetForm);

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      validationSchema={schema}
      enableReinitialize
      onSubmit={async (values) => {
        //persit the data
        handlePersonalFormSubmit(values);

        //handle calling firestore
        if (isLastForm) {
          setIsFormSubmitting(true);
          const finalPersonalFormData = {
            ...personalFormData,
            availableFrom: currentDate.toISOString(),
            availableTo: oneYearLater.toISOString(),
            isAuthenticated: false,
            userName: user.displayName,
            uid: user.uid,
            aboutMe: values,
          };
          await addPersonalSitterDoc(finalPersonalFormData, user.uid);
          setIsFormSubmitting(false);

          setTimeout(() => {
            resetForm();
          }, 1000);

          navigate("/");
        } else {
          nextForm();
        }
      }}
    >
      {() => (
        <Form className="flex flex-col gap-2">
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
              {field.type === "radio" && (
                <div className="mb-4">
                  <h3 className="text-subheader-lg mb-1">{field.label}</h3>

                  <div className="flex flex-row flex-wrap gap-4">
                    {field.options.map((option) => (
                      <MyRadioInput
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
