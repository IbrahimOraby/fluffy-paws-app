import React from "react";

function SmallParagraph({ children, ...props }) {
	return (
		<p className="text-sm font-normal leading-[1.5]" {...props}>
			{children || "Default Small Paragraph"}
		</p>
	);
}

export default SmallParagraph;
