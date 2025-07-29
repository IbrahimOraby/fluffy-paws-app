// import React, { useState } from "react";

// export default function index() {
//   // if normal user set user = "user" , if sitter set user as "setter"
//   const [user, setUser] = useState("user");

//   return (
//     <div className="mt-8 grid grid-cols-12 mb-12 px-8 md:px-0">
//       {/* name of each tab group should be unique */}
//       <div className="tabs tabs-border col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
//         <input
//           type="radio"
//           name="my_tabs_2"
//           className="tab text-lg"
//           aria-label="Dashboard"
//         />
//         <div className="tab-content border-base-300 bg-base-100 p-10">
//           Dashboard
//         </div>

//         <input
//           type="radio"
//           name="my_tabs_2"
//           className="tab text-lg"
//           aria-label="Messages"
//           defaultChecked
//         />
//         <div className="tab-content border-base-300 bg-base-100 p-10">
//          messages
//         </div>

//         <input
//           type="radio"
//           name="my_tabs_2"
//           className="tab text-lg"
//           aria-label="Favourites"
//         />
//         <div className="tab-content border-base-300 bg-base-100 p-10">
//           favourites
//         </div>

//         <input
//           type="radio"
//           name="my_tabs_2"
//           className="tab text-lg"
//           aria-label={user == "user" ? "My Pets" : "My Profile"}
//         />
//         <div className="tab-content border-base-300 bg-base-100 p-10">
//          my pets
//         </div>

//         <input
//           type="radio"
//           name="my_tabs_2"
//           className="tab text-lg"
//           aria-label="Bookings"
//         />
//         <div className="tab-content border-base-300 bg-base-100 p-10">
//           booking
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import UserType from "./components/UserType";
import SitterType from "./components/SitterType";
import ShelterType from "./components/ShelterType";

export default function UserDashboard() {
  // Set the user type. Can be 'user', 'sitter', or 'shelter'.
  // You would typically get this from your authentication system after login.
  const [userType, setUserType] = useState("user"); // Default to 'user' for demonstration

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
