import React from "react";

const GoogleAuthButton = ({ className = "",icon, children,...props }) => {
  return (
    <button className={className} {...props}>
        {icon}
      {children}
    </button>
  );
};

export default GoogleAuthButton;
