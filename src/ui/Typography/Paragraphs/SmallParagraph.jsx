import React from "react";

function SmallParagraph({ children, className = "", ...props }) {
	return (
		<p className={`text-sm font-normal leading-[1.5] ${className}`} {...props}>
			{children || "Default Small Paragraph"}
		</p>
	);
}

export default SmallParagraph;
