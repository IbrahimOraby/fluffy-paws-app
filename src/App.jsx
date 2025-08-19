import { createBrowserRouter, RouterProvider } from "react-router";
import { ErrorBoundary } from "./pages/Error";
import Typography from "./ui/Typography/Typography";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Shelters from "./pages/Shelters";
import Shelter from "./pages/Shelter";
import Profile from "./pages/profile";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import SelectRole from "./pages/Profile-Setup";
import OrganizationSetup from "./pages/Profile-Setup/Org";
import PersonalSetup from "./pages/Profile-Setup/Personal";
import PetWizardForm from "./pages/Pet-profile";
import Booking from "./pages/Booking";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import RoleSetupRoute from "./components/RoleSetupRoute";
import AddReview from "./pages/Shelter/components/AddReview";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorBoundary />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/shelters", element: <Shelters /> },
        { path: "/shelter/:id", element: <Shelter /> },
        { path: "/typography", element: <Typography /> },

        {
          element: <PublicRoute />,
          children: [
            { path: "/signup", element: <Signup /> },
            { path: "/signin", element: <Signin /> },
          ],
        },

        {
          element: <ProtectedRoute />,
          children: [
            { path: "/profile", element: <Profile /> },
            {
              element: <RoleSetupRoute />,
              children: [
                { path: "/select-role", element: <SelectRole /> },
                { path: "/select-role/org", element: <OrganizationSetup /> },
                { path: "/select-role/personal", element: <PersonalSetup /> },
              ],
            },
            { path: "/Pet", element: <PetWizardForm /> },
            { path: "/shelter/:shelterId/add-review", element: <AddReview /> },
            { path: "/booking", element: <Booking /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
