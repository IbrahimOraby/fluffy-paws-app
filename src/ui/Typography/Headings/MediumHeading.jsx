import React from "react";

function MediumHeading({ children, ...props }) {
	return (
		<h2
			className="text-3xl tracking-tight leading-[1.2] font-semibold"
			{...props}
		>
			{children || "Default Medium Heading"}
		</h2>
	);
}

export default MediumHeading;
