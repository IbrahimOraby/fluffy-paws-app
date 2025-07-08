import React from "react";

function MediumParagraph({ children, className = "", ...props }) {
	return (
		<p
			className={`text-base font-normal leading-[1.5] ${className}`}
			{...props}
		>
			{children || "Medium Large Paragraph"}
		</p>
	);
}

export default MediumParagraph;
