import { useState } from "react";
import { StaticEyeIcon, StaticEyeOffIcon } from "../Icons/StaticIcons";

const PasswordInput = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-control">
      {label && <label className="label"><span className="label-text">{label}</span></label>}
      
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="input input-bordered w-full pr-10"
          {...props}
        />
        
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
           <StaticEyeIcon/>
          ) : (
            <StaticEyeOffIcon/>
)}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;