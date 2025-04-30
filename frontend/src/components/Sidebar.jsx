import { Link, NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Logout from "./Logout";
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
	const { authUser } = useAuthContext();

	return (
		<aside className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-glass">
			<nav className="h-full flex flex-col gap-3">
				{/* Logo */}
				<Link to="/" className="flex justify-center" aria-label="Go to homepage">
					<img className="h-8" src="/github.svg" alt="Github Logo" />
				</Link>

				{/* Home Link */}
				{authUser && (
					<NavLink
					to="/"
					className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
					activeClassName="bg-gray-700"
					aria-label="Go to Home"
				>
					<IoHomeSharp size={20} />
				</NavLink>
				)}

				{/* Likes Link (Conditional) */}
				{authUser && (
					<NavLink
						to="/likes"
						className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
						activeClassName="bg-gray-700"
						aria-label="Go to Likes"
					>
						<FaHeart size={22} />
					</NavLink>
				)}

				{/* Explore Link (Conditional) */}
				{authUser && (
					<NavLink
						to="/explore"
						className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
						activeClassName="bg-gray-700"
						aria-label="Explore Repositories"
					>
						<MdOutlineExplore size={25} />
					</NavLink>
				)}

				{/* Login Link (Conditional) */}
				{!authUser && (
					<NavLink
						to="/login"
						className="p-1.5 focus:outline-none transition-colors duration-200 rounded-lg hover:bg-gray-800"
						activeClassName="bg-gray-700"
						aria-label="Login"
					>
						<PiSignInBold size={25} />
					</NavLink>
				)}

				{/* Signup Link (Conditional) */}
				{!authUser && (
					<NavLink
						to="/signup"
						className="p-1.5 focus:outline-none transition-colors duration-200 rounded-lg hover:bg-gray-800"
						activeClassName="bg-gray-700"
						aria-label="Sign Up"
					>
						<MdEditDocument size={25} />
					</NavLink>
				)}

				{/* Logout (Conditional) */}
				{authUser && (
					<div className="flex flex-col gap-2 mt-auto">
						<Logout />
					</div>
				)}
			</nav>
		</aside>
	);
};

export default Sidebar;
