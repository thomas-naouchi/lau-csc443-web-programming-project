// interface UserSectionProps {
//   username: string;
//   followers: number;
//   following: number;
// }

function UserSection({ githubUser }) {
  return (
    <section className="user-section">
      <h2>User Section</h2>

      <div className="user-card">
        <img
          src={githubUser.avatar_url || "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
          alt="User avatar"
        />
        <p>
          <strong>Name:</strong> {githubUser.name}
        </p>
        <p>
          <strong>Followers:</strong> {githubUser.followers}
        </p>
        <p>
          <strong>Following:</strong> {githubUser.following}
        </p>
      </div>
    </section>
  );
}

export default UserSection;
