import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import Spinner from "../components/Spinner";
import Repo from "../components/Repo";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");

  const getUserProfileAndRepos = useCallback(
    async (username= "himanshu-mishra22") => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:5000/api/users/profile/${username}`
        );
        const { repos, userProfile } = await res.json();

        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(repos);
        setUserProfile(userProfile);
        return { userProfile, repos };
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    const { userProfile, repos } = await getUserProfileAndRepos(username);
    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
    setSortType("recent");
  };

  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count);
    }
    setSortType(sortType);
    setRepos([...repos]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <Search onSearch={onSearch} />
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left - Profile Card */}
          {userProfile && !loading && (
            <div className="w-full lg:w-1/3">
              <ProfileInfo userProfile={userProfile} />
            </div>
          )}

          {/* Right - Repos */}
          <div className="w-full lg:w-2/3 space-y-4">
            {repos.length > 0 && (
              <SortRepos onSort={onSort} sortType={sortType} />
            )}
            {!loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {repos.map((repo) => (
                  <Repo key={repo.id} repo={repo} />
                ))}
              </div>
            )}
            {loading && <Spinner />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
