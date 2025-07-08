import React from "react";

function MediumSubHeading({ children, className = "", ...props }) {
	return <p className={`text-base tracking-tight leading-[1.2] font-semibold ${className}`} {...props}>
			{children || "Default Small SubHeading"}
		</p>;
}

export default MediumSubHeading;
