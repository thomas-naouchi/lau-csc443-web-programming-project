import RepoCard from "./RepoCard";

// interface RepositoriesProps {
//   repoCardProps: RepoCardProps
// }

function Repositories() {
  return (
    <section className="repo-section">
      <h2>Repositories</h2>
      <div className="repo-list">
        <RepoCard />
      </div>
    </section>
  );
}

export default Repositories;
