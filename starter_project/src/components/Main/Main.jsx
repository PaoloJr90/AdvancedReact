import "./main.scss";

import Section from "../Section/Section";
import Article from "../Article/Article";
import Aside from "../Aside/Aside";
import Hello from "../Hello/Hello";

function Main({ data }) {
  return (
    <main className="container">
      <Hello name="React" />
      <Section data={data} />
      <Aside data={data} />
      <Article data={data} />
    </main>
  );
}

export default Main;
