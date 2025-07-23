import { Link } from "react-router";

function FooterLink({ children, path,...props }) {
  return (
    <Link
      to={path}
      className="text-gray-400 font-normal p-0 min-h-[3rem] min-w-[3rem] hover:text-[#BE5985]"
      {...props}
    >
      {children}
    </Link>
  );
}

export default FooterLink;
