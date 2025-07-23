import React from "react";

function Paragraph({ children, type = "p", className = "", ...props }) {
	const Element = type;
	return (
		<Element className={`font-normal leading-[1.5] ${className}`} {...props}>
			{children || "Default Large Paragraph"}
		</Element>
	);
}

export default Paragraph;
