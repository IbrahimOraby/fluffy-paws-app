import React from "react";
import ActionLink from "../../../ui/Links/ActionLink";
import {
  StaticLogInIcon,
  StaticLogOutIcon,
  StaticUserIcon,
  StaticXIcon
} from "../../../ui/Icons/StaticIcons";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import useUserStore from "../../../store/useUserStore";
import { signOutUser } from "../../../services/auth_service";
import { useNavigate } from "react-router";

function SideDrawer() {
  const user = useUserStore().user;
  const navigate = useNavigate();
  let firstInitials;

  if (user) {
    firstInitials = user.displayName.slice(0, 1).toUpperCase();
  }

  const handleSignOut = async () => {
    try {
      await signOutUser();
      localStorage.setItem("uid", null);
      const drawer = document.getElementById("nav-drawer");
      if (drawer) drawer.checked = false;
      navigate("/");
    } catch (err) {
      console.error("Sign-out failed:", err);
    }
  };

  return (
    <div className="drawer-side">
      <label htmlFor="nav-drawer" className="drawer-overlay"></label>

      <div className="menu p-0 w-80 min-h-full bg-base-200 text-base-content flex flex-col">
        {/* X button */}
        <div className="flex justify-end">
          <label
            htmlFor="nav-drawer"
            className="btn btn-sm btn-circle btn-ghost m-4"
          >
            <StaticXIcon />
          </label>
        </div>

        {/* Drawer links */}
        <nav>
          <ul className="menu p-0 w-full">
            {user ? (
              <>
                {/* User Info (static, no hover/click effects) */}
                <li className="w-full border-b-2 border-base-300">
                  <ActionLink
                    to="/profile"
                    className="flex flex-row px-4 py-2 active:!bg-transparent"
                    onClick={() => {
                      const drawer = document.getElementById("nav-drawer");
                      if (drawer) drawer.checked = false;
                    }}
                  >
                    <div className="avatar avatar-placeholder rounded-full">
                      <div className="bg-primary-color text-primary-color-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-md font-medium">
                          {firstInitials}
                        </span>
                      </div>
                    </div>
                    <Paragraph className="text-paragraph-lg text-black-color">
                      {user.displayName}
                    </Paragraph>
                  </ActionLink>
                </li>

                {/*Sign Out button */}
                <li className="w-full">
                  <button
                    onClick={handleSignOut}
                    className="flex flex-row items-center w-full px-4 py-2 text-left hover:bg-base-300 active:!bg-transparent"
                  >
                    <span>
                      <StaticLogOutIcon />
                    </span>
                    <Paragraph className="text-paragraph-md">
                      Sign Out
                    </Paragraph>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="w-full">
                  <ActionLink
                    to="/signin"
                    className="flex flex-row px-4 py-2 active:!bg-transparent"
                    onClick={() => {
                      const drawer = document.getElementById("nav-drawer");
                      if (drawer) drawer.checked = false;
                    }}
                  >
                    <span>
                      <StaticUserIcon />
                    </span>
                    <Paragraph className="text-paragraph-md">Sign In</Paragraph>
                  </ActionLink>
                </li>
                <li>
                  <ActionLink
                    to="/signup"
                    className="flex flex-row px-4 py-2 active:!bg-transparent"
                    onClick={() => {
                      const drawer = document.getElementById("nav-drawer");
                      if (drawer) drawer.checked = false;
                    }}
                  >
                    <span>
                      <StaticLogInIcon />
                    </span>
                    <Paragraph className="text-paragraph-md">Sign Up</Paragraph>
                  </ActionLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideDrawer;
