import React from "react";

export default function FilledButton({
	title,
	type = "button",
	className = ""
}) {
	return (
		<>
			<button
				className={`btn 
      capitalize
       bg-primary-color
        border-0
        text-white
        hover:bg-hover-color
        ${className}
        `}
				type={type}
			>
				{title}
			</button>
		</>
	);
}
