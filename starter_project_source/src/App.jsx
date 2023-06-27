import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { getData } from "./common/getData";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const data = getData;

    setData(data);
  }, []);

  const { headerInfo, navItems, myFooterInfo } = data;

  return (
    <div className="page">
      <div className="header-wrap">
        <Header headerInfo={headerInfo} />
        <Nav navItems={navItems} />
      </div>
      <Main data={data} />
      <Footer myFooterInfo={myFooterInfo} />
    </div>
  );
}

export default App;
