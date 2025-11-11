import './githubStyles.css'

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <h1>GitHub Data Viewer</h1>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-container">
        {/* LEFT SECTION: User Info */}
        <section className="user-section">
          <h2>User Profile</h2>
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

        {/* RIGHT SECTION: Repository List */}
        <section className="repo-section">
          <h2>Repositories</h2>
          <div className="repo-list">
            <div className="repo-card">
              <h3>repo1</h3>
              <p>Stars: 25 | Forks: 10</p>
            </div>
            <div className="repo-card">
              <h3>repo2</h3>
              <p>Stars: 40 | Forks: 5</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>Made using the GitHub API</p>
      </footer>
    </>
  )
}

export default App
