import React, { useState } from "react";

import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

function App() {
  const [repoMeta, setRepoMeta] = useState("");

  return (
    <>
      <header className="header">
        <Header />
      </header>

      <main className="main-container">
        <MainContainer />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
