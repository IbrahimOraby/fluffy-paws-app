import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";

export default function RoleSetupRoute() {
  // const userDoc = useUserStore((state) => state.userDoc);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (userDoc?.role) {
  //     navigate("/", { replace: true });
  //   }
  // }, [userDoc, navigate]);

  // if (userDoc?.role) return null;

  return <Outlet />;
}
