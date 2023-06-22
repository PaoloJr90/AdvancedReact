import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { getData } from "./common/getData";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const data = getData;

    setData(data);
  }, []);

  return (
    <div className="page">
      <div className="header-wrap">
        <Header data={data} />
        <Nav data={data} />
      </div>
      <Main data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;
