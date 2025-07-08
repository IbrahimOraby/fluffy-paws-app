import React from "react";

function MediumHeading({ children, className = "", ...props }) {
	return (
		<h2
			className={`text-3xl tracking-tight leading-[1.2] font-semibold ${className}`}
			{...props}
		>
			{children || "Default Medium Heading"}
		</h2>
	);
}

export default MediumHeading;
