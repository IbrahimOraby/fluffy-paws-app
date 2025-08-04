import React, { useState } from "react";
import UserType from "./components/UserType";
import SitterType from "./components/SitterType";
import useUserStore from "../../store/useUserStore";
import OrganizationType from "./components/OrganizationType";

export default function UserDashboard() {
  const { userDoc, loading } = useUserStore();
  // console.log("infoooooo%%%%%", userDoc);

  const renderUserSpecificContent = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
    if (!userDoc || !userDoc.role) {
      return <div>Please complete your profile information.</div>;
    }

    const userRole = userDoc.role;

    switch (userRole) {
      case "client":
        return <UserType />;
      case "personal":
        return <SitterType />;
      case "org":
        return <OrganizationType />;
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
