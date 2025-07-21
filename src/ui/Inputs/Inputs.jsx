import React from "react";

function Inputs({ label, field, meta, className = "", ...props }) {
	// Fallback to props.name if no field is provided
	const inputName = field?.name || props.name || props.id || "";

	return (
		<div className="flex flex-col gap-1 mb-4">
			{label && (
				<label htmlFor={inputName} className={className}>
					{label}
				</label>
			)}
			<input
				type="text"
				id={inputName}
				name={inputName}
				className={`input border px-3 py-2 rounded-md outline-none 
          ${meta?.touched && meta?.error ? `border-red-500` : ``} 
          ${className}`}
				{...(field || {})} // If field is passed (Formik), spread it
				{...props} // Props like value, onChange, placeholder, etc.
			/>
			<div className="text-sm text-red-500">
				{meta?.touched && meta?.error ? meta.error : "\u00A0"}
			</div>
		</div>
	);
}

export default Inputs;
