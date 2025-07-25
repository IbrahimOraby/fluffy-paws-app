import { Link } from "react-router";

function ActionLink({ children, path,className = "",...props }) {
  return (
    <Link
      to={path}
      className={`text-[#BE5985] font-normal p-0  hover:text-[#dfa4ba] ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export default ActionLink;
