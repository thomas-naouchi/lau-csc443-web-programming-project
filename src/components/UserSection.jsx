// interface UserSectionProps {
//   username: string;
//   followers: number;
//   following: number;
// }

function UserSection() {
  return (
    <section className="user-section">
      <h2>User Section</h2>

      <div className="user-card">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="User avatar"
        />
        <p>
          <strong>Username:</strong> octocat
        </p>
        <p>
          <strong>Followers:</strong> 100
        </p>
        <p>
          <strong>Following:</strong> 50
        </p>
      </div>
    </section>
  );
}

export default UserSection;
