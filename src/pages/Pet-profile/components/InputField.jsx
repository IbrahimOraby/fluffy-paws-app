import { Field, ErrorMessage } from "formik";
import { useField } from "formik";

export default function InputField({ name, label, type = "text", ...props }) {
  const [field, meta] = useField({ name, type, ...props });
  return (
    <div className="mb-3 flex flex-col gap-2">
      <label>{label}</label>
      <Field
        name={name}
        type={type}
        className="input  border border-gray-300 focus:border-[#BE5985] focus:outline-none p-2 rounded"
      />
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
}
