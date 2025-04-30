import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaEye } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { formatMemberSince } from "../utils/functions";
import LikeProfile from "./LikeProfile";

const ProfileInfo = ({ userProfile }) => {
	const [stats, setStats] = useState({
		stars: 0,
		languages: [],
		skills: [],
		contributions: 0
	});

	const fullName = userProfile?.name;
	const username = userProfile?.login;
	const location = userProfile?.location;
	const bio = userProfile?.bio;
	const followers = userProfile?.followers;
	const following = userProfile?.following;
	const email = userProfile?.email;
	const twitter = userProfile?.twitter_username;
	const instagram = userProfile?.blog?.includes("instagram") ? userProfile?.blog : null; // Assuming blog field contains the Instagram URL
	const linkedin = userProfile?.blog?.includes("linkedin") ? userProfile?.blog : null; // Same assumption
	const facebook = userProfile?.blog?.includes("facebook") ? userProfile?.blog : null; // Same assumption
	const memberSince = formatMemberSince(userProfile?.created_at);

	// Function to fetch stats from GitHub API
	const fetchStats = async () => {
		try {
			// Fetch repos to calculate stars, languages
			const repos = await fetch(`https://api.github.com/users/${username}/repos`)
				.then((res) => res.json())
				.catch((error) => console.error("Error fetching repos:", error));

			// Calculate Stars
			const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

			// Get unique languages
			const languages = [
				...new Set(repos.map((repo) => repo.language).filter(Boolean))
			];

			// Get skills (topics) from repos
			const skills = repos.map((repo) => repo.topics).flat();
			const uniqueSkills = [...new Set(skills)];

			// Fetch contributions (using GitHub's GraphQL API)
			const contributions = await fetch(`https://api.github.com/users/${username}/events/public`)
				.then((res) => res.json())
				.then((data) => data.length)
				.catch((error) => console.error("Error fetching contributions:", error));

			// Update stats state
			setStats({
				stars,
				languages,
				skills: uniqueSkills,
				contributions
			});
		} catch (error) {
			console.error("Error fetching stats:", error);
		}
	};

	useEffect(() => {
		if (username) {
			fetchStats();
		}
	}, [username]);

	return (
		<div className="w-full max-w-xl mx-auto bg-gradient-to-b from-yellow-50 to-orange-100 p-6 rounded-2xl shadow-md flex flex-col items-center gap-6">
			{/* Profile Picture + GitHub Link */}
			<div className="relative">
				<a href={userProfile?.html_url} target="_blank" rel="noreferrer">
					<img
						src={userProfile?.avatar_url}
						alt="avatar"
						className="w-32 h-32 rounded-full shadow-md border-4 border-white"
					/>
				</a>
				<span className="absolute top-2 right-2 text-xs bg-white px-2 py-0.5 rounded-full shadow">Let’s connect</span>
			</div>

			{/* Like and View on GitHub */}
			<div className="flex flex-col items-center gap-2">
				<LikeProfile userProfile={userProfile} />
				<a
					href={userProfile?.html_url}
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-2 text-sm text-blue-700 bg-white border border-blue-300 px-3 py-1 rounded-md shadow hover:bg-blue-50"
				>
					<FaEye size={14} />
					View on GitHub
				</a>
			</div>

			{/* Name + Username */}
			<div className="text-center">
				<h2 className="text-2xl font-bold text-gray-800">{fullName}</h2>
				<p className="text-gray-600 text-sm">@{username}</p>
			</div>

			{/* Bio, Location, Twitter */}
			{bio && (
				<div className="flex items-center gap-2 text-gray-700 text-sm">
					<TfiThought /> <p>{bio}</p>
				</div>
			)}
			{location && (
				<div className="flex items-center gap-2 text-gray-700 text-sm">
					<IoLocationOutline /> <p>{location}</p>
				</div>
			)}
			{twitter && (
				<a
					href={`https://twitter.com/${twitter}`}
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-2 text-gray-700 text-sm hover:text-sky-500"
				>
					<FaXTwitter />
					{twitter}
				</a>
			)}

			{/* Member Since / Email */}
			<div className="text-gray-700 text-sm text-center">
				<p><strong>Member Since:</strong> {memberSince}</p>
				{email && <p><strong>Email:</strong> {email}</p>}
			</div>

			{/* Followers / Following */}
			<div className="flex gap-4 text-gray-700 text-sm">
				<span className="flex items-center gap-1">
					<RiUserFollowFill /> {followers} Followers
				</span>
				<span className="flex items-center gap-1">
					<RiUserFollowLine /> {following} Following
				</span>
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-2 gap-4 w-full bg-white border border-orange-200 p-4 rounded-xl text-sm text-gray-800">
				<div>
					<p className="font-semibold">Stars</p>
					<p>{stats.stars}</p>
				</div>
				<div>
					<p className="font-semibold">Skills</p>
					<ul className="list-disc list-inside text-gray-600">
						{stats.skills.length > 0 ? (
							stats.skills.map((skill, index) => <li key={index}>{skill}</li>)
						) : (
							<li>No skills listed</li>
						)}
					</ul>
				</div>
				<div>
					<p className="font-semibold">Languages</p>
					<ul className="list-disc list-inside text-gray-600">
						{stats.languages.length > 0 ? (
							stats.languages.map((language, index) => <li key={index}>{language}</li>)
						) : (
							<li>No languages listed</li>
						)}
					</ul>
				</div>
				<div>
					<p className="font-semibold">Contributions</p>
					<p>{stats.contributions}</p>
				</div>
			</div>

			{/* Social Links */}
			<div className="flex gap-3 mt-2">
				{instagram && (
					<a href={instagram} target="_blank" rel="noreferrer" className="bg-pink-100 p-2 rounded-full hover:bg-pink-200">
						<FaInstagram className="text-pink-500" />
					</a>
				)}
				{facebook && (
					<a href={facebook} target="_blank" rel="noreferrer" className="bg-blue-100 p-2 rounded-full hover:bg-blue-200">
						<FaFacebookF className="text-blue-600" />
					</a>
				)}
				{twitter && (
					<a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer" className="bg-black p-2 rounded-full hover:opacity-80">
						<FaXTwitter className="text-white" />
					</a>
				)}
				{linkedin && (
					<a href={linkedin} target="_blank" rel="noreferrer" className="bg-sky-100 p-2 rounded-full hover:bg-sky-200">
						<FaLinkedinIn className="text-sky-600" />
					</a>
				)}
			</div>
		</div>
	);
};

export default ProfileInfo;
