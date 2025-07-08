import React from "react";

function SmallHeading({ children, ...props }) {
	return (
		<h2
			className="text-lg tracking-tight leading-[1.2] font-semibold"
			{...props}
		>
			{children || "Default Small Heading"}
		</h2>
	);
}

export default SmallHeading;
