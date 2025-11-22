import React, { useEffect, useState } from "react";
import RepoCard from "./RepoCard";

function Repositories({ githubUser }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUser.login}/repos`
        );
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    if (githubUser && githubUser.login) {
      fetchRepositories();
    }
  }, [githubUser]);

  return (
    <section className="repo-section">
      <h2>Repositories 
        {githubUser && githubUser.login && typeof githubUser.public_repos === "number" 
          ? `(${githubUser.public_repos})` 
          : " (search for a user)"}
      </h2>
      <div className="repo-list">
        {repos.map((repo) => (
          <RepoCard
            name={repo.name}
            id={repo.id}
            description={repo.description}
            url={repo.html_url}
          />
        ))}
      </div>
    </section>
  );
}

export default Repositories;
