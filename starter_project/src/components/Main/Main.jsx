import "./main.scss";

import Section from "../Section/Section";
import Article from "../Article/Article";
import Aside from "../Aside/Aside";
import Hello from "../Hello/Hello";

function Main() {
  return (
    <main className="container">
      <Hello name="React" />
      <Section />
      <Aside />
      <Article />
    </main>
  );
}

export default Main;
