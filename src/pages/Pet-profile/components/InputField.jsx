import { useField } from "formik";

export default function InputField({
  name,
  label,
  type = "text",
  options = [],
  ...props
}) {
  const [field, meta] = useField({ name, type, ...props });

  return (
    <div className="mb-3 flex flex-col">
      <label className="mb-1 font-medium">{label}</label>

      {type === "select" ? (
        <select
          {...field}
          {...props}
          className="input border border-gray-300 focus:border-primary-color focus:outline-none p-2 rounded"
        >
          <option value="">Select...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...field}
          {...props}
          type={type}
          className="input border border-gray-300 focus:border-primary-color focus:outline-none p-2 rounded"
        />
      )}

      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs mt-1">{meta.error}</div>
      )}
    </div>
  );
}
