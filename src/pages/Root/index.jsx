import { Link, Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideDrawer from "./components/SideDrawer";

const Root = () => {
  return (
    <>
      {/* Drawer (only small screens) */}
      <div className="drawer drawer-end z-10">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar*/}
          <Navbar />

          {/*Main Content*/}
          {/* min-h-lv: it was only added to make empty pages appear normall, it can be replaced or removed */}
          <main className="min-h-lvh">
            <Outlet />
          </main>

          {/*Footer*/}
          <Footer />
        </div>
        <SideDrawer />
      </div>
    </>
  );
};

export default Root;
