import "./styles/main.scss";

import Section from "./Section";
import Article from "./Article";
import Aside from "./Aside";
import Hello from "./Hello";

function Main({ data }) {
  const { mySectionInfo, myAsideInfo, myArticleInfo } = data;
  return (
    <main className="container">
      <Hello name="React" />
      <Section mySectionInfo={mySectionInfo} />
      <Aside myAsideInfo={myAsideInfo} />
      <Article myArticleInfo={myArticleInfo} />
    </main>
  );
}

export default Main;
