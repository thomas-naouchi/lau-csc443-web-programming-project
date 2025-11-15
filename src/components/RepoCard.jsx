// interface RepoCardProps {
//   name: string;
//   stars: number;
//   forks: number;
// }

function RepoCard() {
  return (
    <>
      <div className="repo-card">
        <h3>repo1</h3>
        <p>Stars: 25 | Forks: 10</p>
      </div>
      <div className="repo-card">
        <h3>repo2</h3>
        <p>Stars: 40 | Forks: 5</p>
      </div>
    </>
  );
}

export default RepoCard;