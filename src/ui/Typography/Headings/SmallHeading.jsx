import React from "react";

function SmallHeading({ children, className = "", ...props }) {
	return (
		<h2
			className={`text-lg tracking-tight leading-[1.2] font-semibold ${className}`}
			{...props}
		>
			{children || "Default Small Heading"}
		</h2>
	);
}

export default SmallHeading;
