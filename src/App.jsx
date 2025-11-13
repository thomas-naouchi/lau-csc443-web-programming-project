import Repos from './components/Repos';
import './githubStyles.css';
import React, { useState } from 'react';

function App() {
  const [repoMeta, setRepoMeta] = useState('');

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

        {/* RIGHT SECTION: Repository List + Fetch Button */}
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
          {/* Add fetch button and metadata display */}
          <div style={{ marginTop: '2rem' }}>
            {repoMeta && (
              <textarea
                style={{ width: '100%', minHeight: '200px', marginTop: '1rem' }}
                value={repoMeta}
                readOnly
              />
            )}
          </div>
          <Repos></Repos>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>Made using the GitHub API</p>
      </footer>
    </>
  );
}

export default App;
