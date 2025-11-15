function UserCard() {
  return (
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
  );
}

export default UserCard;