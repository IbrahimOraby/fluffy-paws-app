import { useState } from "react";
import { useField } from "formik";
import Inputs from "./Inputs";
import { StaticEyeIcon, StaticEyeOffIcon } from "../Icons/StaticIcons";

const MyPasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Inputs
      label={label}
      field={field}
      meta={meta}
      type={showPassword ? "text" : "password"}
      {...props}
    >
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center px-3 z-1"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <StaticEyeIcon color="gray" /> : <StaticEyeOffIcon color="gray" />}
      </button>
    </Inputs>
  );
};

export default MyPasswordInput;