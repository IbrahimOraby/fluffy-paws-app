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
import OrganizationSetup from "./pages/Profile-Setup/Org";
import SelectRole from "./pages/Profile-Setup";

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
        {},
        { path: "/typography", element: <Typography /> },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      </RouterProvider>
  );
}
