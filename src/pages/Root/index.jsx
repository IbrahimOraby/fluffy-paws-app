import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideDrawer from "./components/SideDrawer";
import LoadingSpinner from "../../ui/loading/LoadingSpinner";
import useUserStore from "../../store/useUserStore";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();
  const showNavFooter = !location.pathname.includes("/select-role");
  const user = useUserStore((state) => state.user);
  const userDataLoading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);
  const observeAuth = useUserStore((state) => state.observeAuth);

  useEffect(() => {
    const unsubscribe = observeAuth();
    return () => unsubscribe();
  }, [observeAuth]);

  useEffect(() => {
    if (user?.uid) {
      localStorage.setItem("uid", JSON.stringify(user.uid));
    } else {
      localStorage.setItem("uid", null);
    }
  }, [user]);


  if (userDataLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {/* Drawer (only small screens) */}
      <div className="drawer drawer-end z-10">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar*/}
          {showNavFooter && <Navbar />}

          {/*Main Content*/}
          {/* min-h-lv: it was only added to make empty pages appear normall, it can be replaced or removed */}
          <main className="min-h-lvh">
            <Outlet />
          </main>

          {/*Footer*/}
          {showNavFooter && <Footer />}
        </div>
        <SideDrawer />
      </div>
    </>
  );
};

export default Root;
