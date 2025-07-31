import { useField } from "formik";
import { StaticCheckIcon } from "../Icons/StaticIcons";

export const MyCheckboxInput = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });

  const isChecked = Array.isArray(field.value)
    ? field.value.includes(props.value)
    : field.checked;

  return (
    <label
      className={`btn btn-md font-normal cursor-pointer flex items-center gap-2 border transition
        ${
          isChecked
            ? "bg-primary-color text-primary-color-100 border-primary-color"
            : ""
        }
      `}
      aria-label={label}
    >
      <input type="checkbox" {...field} {...props} className="hidden" />
      <span>{label}</span>
      {isChecked && <StaticCheckIcon size={18} />}
    </label>
  );
};
