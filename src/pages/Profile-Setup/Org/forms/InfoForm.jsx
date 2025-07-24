import { Form, Formik } from "formik";
import MyTextInput from "../../../../ui/Inputs/MyTextInput";

const InfoForm = () => {
  return (
    <Formik initialValues={{ name: "", email: "", location: "", website: "" }}>
      {({ values }) => 
(        <Form>
          <MyTextInput
            label={"Name"}
            name={"name"}
            placeholder={"Enter your organization name"}
            value={values.name}
            type="string"
          />
          <MyTextInput
            label={"Email Address"}
            name={"email"}
            placeholder={"Enter your organization Email"}
            value={values.email}
            type="email"
          />
          <MyTextInput
            label={"Location"}
            name={"location"}
            placeholder={"Enter your organization location"}
            value={values.location}
            type="string"
          />
          <MyTextInput
            label={"Website"}
            name={"website"}
            placeholder={"Enter your organization website"}
            value={values.website}
            type="url"/>
        </Form>)
      }
    </Formik>
  );
};

export default InfoForm;
