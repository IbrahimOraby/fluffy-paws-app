import React from 'react'
import ActionLink from '../../../ui/Links/ActionLink';
import { StaticLogInIcon, StaticUserIcon, StaticXIcon } from '../../../ui/Icons/StaticIcons';
import Paragraph from '../../../ui/Typography/Paragraph/Paragraph';

function SideDrawer() {
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
                <li className="w-full">
                  <ActionLink
                    to="/signin"
                    className="flex flex-row px-4 py-2"
                    onClick={() => {
                      const drawer = document.getElementById("nav-drawer");
                      if (drawer) drawer.checked = false;
                    }}
                  >
                    <span>
                      <StaticUserIcon />
                    </span>
                    <Paragraph className="text-paragraph-lg">Sign In</Paragraph>
                  </ActionLink>
                </li>
                <li>
                  <ActionLink
                    to="/signup"
                    className="flex flex-row px-4 py-2"
                    onClick={() => {
                      const drawer = document.getElementById("nav-drawer");
                      if (drawer) drawer.checked = false;
                    }}
                  >
                    <span>
                      <StaticLogInIcon />
                    </span>
                    <Paragraph className="text-paragraph-lg">Sign Up</Paragraph>
                  </ActionLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
  )
}

export default SideDrawer