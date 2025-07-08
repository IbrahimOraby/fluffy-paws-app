import React from "react";

function LargeParagraph({ children, className = "", ...props }) {
	return (
		<p className={`text-lg font-normal leading-[1.5] ${className}`} {...props}>
			{children || "Default Large Paragraph"}
		</p>
	);
}

export default LargeParagraph;
