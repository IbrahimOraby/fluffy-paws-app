
import { createBrowserRouter, RouterProvider } from "react-router";
import { ErrorBoundary } from "./pages/Error";
import Typography from "./ui/Typography/Typography";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Shelters from "./pages/Shelters";
import Shelter from "./pages/shelter";
import Profile from './pages/profile';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

export default function App() {
	return (
		<>
			<p style={{ fontWeight: 100 }}>Hello Pets</p>
			<h1 style={{ fontWeight: 900 }}>hello</h1>
			<div style={{ color: "var(--primary-color)", fontWeight: 500 }}>
				This uses --color-primary
			</div>
			<Typography></Typography>
		</>
	);
}
