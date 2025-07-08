import React from "react";

function SmallSubHeading({ children, className = "", ...props }) {
	return (
		<p
			className={`text-sm tracking-tight leading-[1.2] font-semibold ${className}`}
			{...props}
		>
			{children || "Default Small SubHeading"}
		</p>
	);
}

export default SmallSubHeading;
