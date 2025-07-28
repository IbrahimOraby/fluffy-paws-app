import { Link, Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideDrawer from "./components/SideDrawer";

const Root = () => {
  const location = useLocation();
  console.log(location.pathname);
  const showNavFooter = !location.pathname.includes("/select-role");
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
