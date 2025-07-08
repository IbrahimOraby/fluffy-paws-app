import React from "react";

function LargeHeading({ children, ...props }) {
	return (
		<h2
			className="text-5xl tracking-tight leading-[1.2] font-semibold"
			{...props}
		>
			{children || "Default Large Heading"}
		</h2>
	);
}

export default LargeHeading;
