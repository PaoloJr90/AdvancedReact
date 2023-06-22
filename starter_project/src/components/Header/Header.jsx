import "./header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <p className="logo">
          <a href="/">Logo</a>
        </p>
        <p>React app</p>
      </div>
    </header>
  );
}

export default Header;
