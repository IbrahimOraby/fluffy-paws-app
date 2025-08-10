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


  // prevent rendering if already redirected
  if (user) return null; 

  return <Outlet />;
}

export default PublicRoute;
