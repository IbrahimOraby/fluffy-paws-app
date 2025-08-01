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
import SelectRole from './pages/Profile-Setup'
import OrganizationSetup from './pages/Profile-Setup/Org'
import PersonalSetup from './pages/Profile-Setup/Personal'
import PetWizardForm from "./pages/Pet-profile";
import Booking from "./pages/Booking";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorBoundary />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/shelters", element: <Shelters /> },
        { path: "/shelter", element: <Shelter /> },
        { path: "/profile", element: <Profile /> },
        { path: "/signup", element: <Signup /> },
        { path: "/signin", element: <Signin /> },
        { path: "/select-role", element: <SelectRole /> },
        { path: "/select-role/org", element: <OrganizationSetup /> },
        { path: "/select-role/personal", element: <PersonalSetup /> },
        { path: "/typography", element: <Typography /> },
        { path: "/Pet", element: <PetWizardForm /> },
        { path: "/booking", element: <Booking /> },
      ]
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
