// interface RepoCardProps {
//   name: string;
//   stars: number;
//   forks: number;
// }

function RepoCard({ id, name, description, url }) {
  return (
    <>
      <div className="repo-card">
        <h3>{name}</h3>
        <p>
          <strong>ID : </strong> {id}
        </p>
        <p>
          <strong>Description : </strong> {description}
        </p>
        <p>
          <strong>URL : </strong> <a href={url}>{url}</a>
        </p>
      </div>
    </>
  );
}

export default RepoCard;
