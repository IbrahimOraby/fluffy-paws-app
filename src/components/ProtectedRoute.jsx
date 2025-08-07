import { useEffect } from "react";
import useUserStore from "../store/useUserStore";
import { Outlet, useNavigate } from "react-router";

function ProtectedRoute() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      navigate("/signin", { replace: true });
    }
  }, [user, navigate]);

  return <Outlet />;
}

export default ProtectedRoute;
