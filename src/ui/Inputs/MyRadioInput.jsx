import { useField } from "formik";

export const MyRadioInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <input
      type="radio"
      aria-label={label}
              checked={field.value === props.value}

      {...field}
      {...props}
      className="btn btn-md font-normal focus:shadow-none focus:text-primary-color-100
       focus:border-primary-color  focus:bg-primary-color checked:bg-primary-color
       checked:border-primary-color checked:text-primary-color-100 checked:shadow-none"
    />
  );
};
