import { FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleLoginWithGithub } from "../lib/function";
import Illustration from "../assets/Image.jpg";

const SignUpPage = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-200 to-white">
					<div className="flex bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
						{/* Left side with image */}
						<div className="hidden md:flex items-center justify-center w-1/2 p-6">
							<img src={Illustration} alt="Login illustration" className="max-w-full h-auto" />
						</div>
		
						{/* Right side with form */}
						<div className="w-full md:w-1/2 p-8 space-y-6 flex flex-col justify-center">
							<h2 className="text-2xl font-bold text-center">Create Account</h2>
							<button
								type="button"
								onClick={handleLoginWithGithub}
								className="bg-purple-400 hover:bg-purple-500 text-white font-medium py-2 px-4 rounded-lg w-full transition"
							>
								<FaGithub className="inline mr-2" />
								Sign up with GitHub
							</button>
							<p className="text-sm text-center text-gray-600">
								By signing in you’ll unlock all the features of the app.<br />
								Already have an account?{" "}
								<Link to="/login" className="text-purple-600 hover:underline">
									Login
								</Link>
							</p>
						</div>
					</div>
				</div>
	);
};
export default SignUpPage;
