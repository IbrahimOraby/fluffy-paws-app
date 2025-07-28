import { useField } from "formik";

export const MyRadioInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <input
      type="radio"
      aria-label={label}
      {...field}
      {...props}
      className="btn btn-lg focus:shadow-none focus:text-primary-color-100
       focus:border-primary-color  focus:bg-primary-color checked:bg-primary-color
       checked:border-primary-color checked:text-primary-color-100 checked:shadow-none"
    />
  );
};
