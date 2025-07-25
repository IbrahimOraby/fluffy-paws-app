import React from "react";
import ActionLink from "../../../ui/Links/ActionLink";
import FilledButton from "../../../ui/Buttons/FilledButton";
import { Link } from "react-router";
import Heading from "../../../ui/Typography/Heading/Heading";
import { StaticMenuIcon } from "../../../ui/Icons/StaticIcons";

function Navbar() {
  return (
    <header className="navbar flex items-center justify-center bg-base-100 shadow-sm min-h-[4rem] px-8">
      <div className="flex-1 flex items-center">
        <ActionLink to="/" className="">
          <Heading type="h1" className="text-2xl">
            Fluffy Paws
          </Heading>
        </ActionLink>
      </div>

      {/* Desktop menu */}
      <nav className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <FilledButton className="text-primary-color bg-primary-color-100 rounded-3xl btn-lg">
              <Link to="/signin" className="text-paragraph-md">
                Sign In
              </Link>
            </FilledButton>
          </li>
          <li>
            <FilledButton className="bg-primary-color text-primary-color-100 rounded-3xl btn-lg">
              <Link to="/signup" className="text-paragraph-md">
                Sign Up
              </Link>
            </FilledButton>
          </li>
        </ul>
      </nav>

      {/* Burger icon for small screens */}
      <div className="lg:hidden">
        <label htmlFor="nav-drawer" className="btn btn-ghost btn-circle">
          <StaticMenuIcon/>
        </label>
      </div>
    </header>
  );
}

export default Navbar;
