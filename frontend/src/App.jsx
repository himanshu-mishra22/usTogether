import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";

import Sidebar from "./components/Sidebar";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser, loading } = useAuthContext();

	if (loading) return null;

	return (
		<div className="flex h-screen overflow-hidden">
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content Area */}
			<div className="flex-1 flex flex-col overflow-y-auto bg-gradient-to-b from-yellow-50 to-white px-4 py-6">
				<div className="w-full max-w-6xl mx-auto flex-1">
					<Routes>
						<Route path="/" element={authUser ? <HomePage/> : <LoginPage />}  />
						<Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
						<Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
						<Route path="/explore" element={authUser ? <ExplorePage /> : <Navigate to="/login" />} />
						<Route path="/likes" element={authUser ? <LikesPage /> : <Navigate to="/login" />} />
					</Routes>
				</div>
			</div>

			{/* Toast Notifications */}
			<Toaster position="top-right" />
		</div>
	);
}

export default App;
