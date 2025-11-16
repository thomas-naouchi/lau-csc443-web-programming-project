import React, { useState } from "react";

import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

function App() {
  const [githubUser, setGithubUser] = useState("");

  return (
    <>
      <header className="header">
        <Header />
      </header>

      <main className="main-container">
        <MainContainer githubUser={githubUser} setGithubUser={setGithubUser}/>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
