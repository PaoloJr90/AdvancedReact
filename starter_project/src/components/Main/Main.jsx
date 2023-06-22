import "./main.scss";

import Section from "../Section/Section";
import Article from "../Article/Article";
import Aside from "../Aside/Aside";
import Hello from "../Hello/Hello";

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
