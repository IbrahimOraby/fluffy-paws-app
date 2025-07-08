import React from "react";

function LargeSubHeading({ children, className = "", ...props }) {
	return (
		<p className={`text-lg tracking-tight leading-[1.2] font-semibold ${className}`} {...props}>
			{children || "Default Small SubHeading"}
		</p>
	);
}

export default LargeSubHeading;
