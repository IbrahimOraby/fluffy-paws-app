import { useField } from "formik";

const MySelectInput = ({ label, className = "", ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        className={`select select-bordered w-full ${className}`}
      >
        {props.children}
      </select>
      {
        <div
          className={`text-error text-sm mt-1 h-5 invisible ${
            meta?.touched && meta?.error && `visible`
          }`}
        >
          {meta.error}
        </div>
      }{" "}
    </div>
  );
};

export default MySelectInput;
