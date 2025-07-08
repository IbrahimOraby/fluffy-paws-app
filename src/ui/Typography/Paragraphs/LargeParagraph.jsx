import React from "react";

function LargeParagraph({ children, ...props }) {
	return (
		<p className="text-lg font-normal leading-[1.5]" {...props}>
			{children || "Default Large Paragraph"}
		</p>
	);
}

export default LargeParagraph;
