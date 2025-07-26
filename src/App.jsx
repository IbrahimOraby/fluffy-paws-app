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
import IndividualSetup from "./pages/Profile-Setup/Individual";

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
        { path: "/select-role/individual", element: <IndividualSetup /> },
        { path: "/typography", element: <Typography /> }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}>
      <p style={{ fontWeight: 100 }}>Hello Pets</p>
      <h1 style={{ fontWeight: 900 }}>hello</h1>
      <div style={{ color: "var(--primary-color)", fontWeight: 500 }}>
        This uses --color-primary
      </div>
      <Typography></Typography>
    </RouterProvider>
  );
}
