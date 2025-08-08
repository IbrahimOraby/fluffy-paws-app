import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useUserStore from "../store/useUserStore";

function PublicRoute() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);


  if (user) return null; // Prevent rendering if already redirected

  return <Outlet />;
}

export default PublicRoute;
