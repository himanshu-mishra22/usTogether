import { FaGithub } from "react-icons/fa";
import { handleLoginWithGithub } from "../lib/function";
import Illustration from "../assets/avatar.jpg";

const LoginPage = () => {
	return (
		<div className="min-h-screen bg-[#fff8ee] flex flex-col">
			{/* Top Nav */}
			<div className="flex justify-between items-center px-10 py-6">
				<h1 className="text-5xl font-bold text-[#f97316]">Us <span className="text-black">Together</span></h1>
				
			</div>

			{/* Hero Section */}
			<div className="flex flex-col-reverse md:flex-row items-center justify-center flex-1 px-10">
				{/* Left Text */}
				<div className="md:w-1/2 space-y-6">
					<h2 className="text-3xl md:text-4xl font-bold">
						Shaping Tomorrow with <br />
						<span className="text-orange-500">Collaboration</span>
					</h2>
					<p className="text-gray-600 max-w-md">
						Unite your development and deployment on one collaborative platform.
						Accelerate software delivery with seamless teamwork.
					</p>
					<div className="flex gap-4">
						<button
							onClick={handleLoginWithGithub}
							className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-full font-medium"
						>
							<FaGithub className="inline mr-2" />
							Sign Up
						</button>
					</div>
				</div>

				{/* Right Image */}
				<div className="md:w-1/2 mb-10 md:mb-0">
					<img src={Illustration} alt="Illustration" className="max-w-full h-auto" />
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
