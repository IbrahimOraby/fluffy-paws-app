import React from "react";

function SubHeading({ children, type = "p", className = "", ...props }) {
	const Element = type;
	return (
		<Element
			className={`text-sm tracking-tight leading-[1.2] font-semibold ${className}`}
			{...props}
		>
			{children || "Default Small SubHeading"}
		</Element>
	);
}

export default SubHeading;
