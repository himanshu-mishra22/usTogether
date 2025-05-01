import Repo from "./Repo";

const Repos = ({ repos, alwaysFullWidth = false }) => {
	const className = alwaysFullWidth ? "w-full" : "w-full";

	return (
		<div className={`${className} bg-glass rounded-lg px-8 py-6`}>
			{repos.length === 0 ? (
				<p className="flex items-center justify-center h-32">No repos found</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{repos.map((repo) => (
						<Repo key={repo.id} repo={repo} />
					))}
				</div>
			)}
		</div>
	);
};

export default Repos;
