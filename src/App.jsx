import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

function App() {
  

  return (
    <>
      <header className="header">
        <Header />
      </header>

      <main className="main-container">
        <MainContainer/>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
