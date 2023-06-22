import React from "react";
import Hello from "./Hello";
import Aside from "./Aside";

const Main = () => {
  return (
    <main>
      <Hello name="React" extra="is great!" />
      This is the `main`
      <Aside />
    </main>
  );
};

export default Main;
