import React, { useState } from "react";
import UserType from "./components/UserType";
import SitterType from "./components/SitterType";
import ShelterType from "./components/ShelterType";

export default function UserDashboard() {
  // Set the user type. Can be 'user', 'sitter', or 'shelter'.
  const [userType, setUserType] = useState("sitter"); 

  const renderUserSpecificContent = () => {
    switch (userType) {
      case "user":
        return (
          <>
            <UserType />
          </>
        );
      case "sitter":
        return (
          <>
            <SitterType />
          </>
        );
      case "shelter":
        return (
          <>
            <ShelterType />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-8 grid grid-cols-12 mb-12 px-8 md:px-0">
      <div className="tabs tabs-border col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
        {renderUserSpecificContent()}
      </div>
    </div>
  );
}
