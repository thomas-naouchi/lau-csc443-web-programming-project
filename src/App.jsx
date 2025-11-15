import Header from "./components/Header";
import UserSection from "./components/UserSection";
import Repositories from "./components/Repositories";
import DataGrid from "./components/DataGrid";
import SearchBar from "./components/SearchBar";
// import './githubStyles.css';
import React, { useState } from "react";

function App() {
  const [repoMeta, setRepoMeta] = useState("");

  return (
    <>
      <Header />

      <main className="main-container">
        <SearchBar />
        <DataGrid />
      </main>

      <footer className="footer">
        <p>Made using the GitHub API</p>
      </footer>
    </>
  );
}

export default App;
