import React from "react";

function Heading({ children, type = "h2", className = "", ...props }) {
	const Element = type;
	return (
		<Element
			className={`tracking-tight leading-[1.2] font-semibold ${className}`}
			{...props}
		>
			{children || "Default Heading"}
		</Element>
	);
}

export default Heading;
