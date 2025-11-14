import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import Repositories from './components/Repositories';
import './githubStyles.css';
import React, { useState } from 'react';

function App() {
  const [repoMeta, setRepoMeta] = useState('');

  return (
    <>
      <Header />

      {/* MAIN CONTENT */}
      <main className="main-container">
        <ProfileSection />
        <Repositories />
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>Made using the GitHub API</p>
      </footer>
    </>
  );
}

export default App;
