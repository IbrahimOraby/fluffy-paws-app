import React from "react";

function Paragraph({ children, className = "", ...props }) {
	return (
		<p className={`font-normal leading-[1.5] ${className}`} {...props}>
			{children || "Default Large Paragraph"}
		</p>
	);
}

export default Paragraph;
