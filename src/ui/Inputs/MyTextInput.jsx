import { useField } from "formik";
import Inputs from "./Inputs";
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Inputs label={label} field={field} meta={meta} {...props} />
    </>
  );
};

export default MyTextInput;
