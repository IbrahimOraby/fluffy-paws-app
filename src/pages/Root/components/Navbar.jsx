import React from "react";
import ActionLink from "../../../ui/Links/ActionLink";
import FilledButton from "../../../ui/Buttons/FilledButton";
import { Link } from "react-router";
import Heading from "../../../ui/Typography/Heading/Heading";

function Navbar() {
  return (
    <header className="navbar flex items-center justify-center bg-base-100 shadow-sm min-h-[4rem]">
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
            <FilledButton className="text-primary-color bg-primary-color-100 rounded-2xl">
              <Link to="/signin" className="">
                Sign In
              </Link>
            </FilledButton>
          </li>
          <li>
            <FilledButton className="bg-primary-color text-primary-color-100 rounded-2xl">
              <Link to="/signup" className="">
                Sign Up
              </Link>
            </FilledButton>
          </li>
        </ul>
      </nav>

      {/* Burger icon for small screens */}
      <div className="lg:hidden">
        <label htmlFor="nav-drawer" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
    </header>
  );
}

export default Navbar;
