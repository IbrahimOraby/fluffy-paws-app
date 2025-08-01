import { useField } from "formik";

const MyTextArea = ({ label, className = "", ...props }) => {
  const [field, meta] = useField(props);
  const inputId = props.id || props.name;

  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && (
        <label htmlFor={inputId} className={className}>
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={`textarea textarea-bordered w-full h-24 focus:outline-none ${
          meta?.touched && meta?.error ? "textarea-error" : ""
        } ${className}`}
        {...field}
        {...props}
      />
      <div
        className={`text-error text-sm mt-1 h-5 ${
          meta?.touched && meta?.error ? "visible" : "invisible"
        }`}
      >
        {meta.error}
      </div>
    </div>
  );
};

export default MyTextArea;