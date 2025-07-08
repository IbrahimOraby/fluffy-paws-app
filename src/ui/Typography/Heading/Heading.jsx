import React from "react";

function Heading({ children, className = "", ...props }) {
	return (
		<h2
			className={`tracking-tight leading-[1.2] font-semibold ${className}`}
			{...props}
		>
			{children || "Default Heading"}
		</h2>
	);
}

export default Heading;
