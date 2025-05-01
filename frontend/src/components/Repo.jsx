import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { PROGRAMMING_LANGUAGES } from "../utils/constants";
import toast from "react-hot-toast";

const Repo = ({ repo }) => {
	const handleCloneClick = async () => {
		try {
			await navigator.clipboard.writeText(repo.clone_url);
			toast.success("Repo URL copied to clipboard");
		} catch (error) {
			toast.error("Failed to copy URL");
		}
	};

	return (
		<div className="border border-orange-200 rounded-xl p-4 shadow-md bg-white transition-transform hover:scale-[1.02]">
			<div className="flex justify-between items-center mb-2">
				<h3 className="text-md font-semibold text-gray-800 flex items-center gap-2">
					<FaCodeBranch className="text-blue-500" />
					<a href={repo.html_url} target="_blank" rel="noreferrer" className="hover:underline">
						{repo.name}
					</a>
				</h3>
				<span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">
					Public
				</span>
			</div>

			<p className="text-sm text-gray-600 mb-3 line-clamp-3">
				{repo.description ? repo.description.slice(0, 250) : "No description provided"}
			</p>

			<div className="flex flex-wrap items-center gap-2 text-xs font-medium mb-3">
				<span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full flex items-center gap-1">
					<FaRegStar /> {repo.stargazers_count}
				</span>
				<span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full flex items-center gap-1">
					<FaCodeFork /> {repo.forks_count}
				</span>
				<span
					onClick={handleCloneClick}
					className="cursor-pointer bg-green-100 text-green-800 px-2 py-0.5 rounded-full flex items-center gap-1"
				>
					<FaCopy /> Clone
				</span>
			</div>

			{repo.language && PROGRAMMING_LANGUAGES[repo.language] && (
				<div className="flex items-center gap-2 text-xs">
					<span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
						<img src={PROGRAMMING_LANGUAGES[repo.language]} alt={repo.language} className="h-4 w-4" />
						{repo.language}
					</span>
				</div>
			)}
		</div>
	);
};

export default Repo;
