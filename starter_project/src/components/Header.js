import React from "react";

const Header = ({ learning, languages }) => {
  return (
    <>
      {" "}
      <header>
        <h2>This is the Header</h2>
        <h3>{learning}</h3>

        <div style={{ display: "flex", gap: "10px" }}>
          {languages.map((item, index) => {
            return <nav key={`item-${index}`}>{item}</nav>;
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
