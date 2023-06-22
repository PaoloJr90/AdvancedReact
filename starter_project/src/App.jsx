import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="header-wrap">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
