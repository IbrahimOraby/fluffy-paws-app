import React from "react";

function MediumParagraph({ children, ...props }) {
	return (
		<p className="text-base font-normal leading-[1.5]" {...props}>
			{children || "Medium Large Paragraph"}
		</p>
	);
}

export default MediumParagraph;
