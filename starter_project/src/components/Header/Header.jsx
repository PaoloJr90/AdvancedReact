import "./header.scss";

function Header({ data }) {
  const { headerInfo } = data;

  return (
    <header>
      <div className="container">
        <p className="logo">
          <a href={headerInfo?.link}>{headerInfo?.logo}</a>
        </p>
        <p>{headerInfo?.version}</p>
      </div>
    </header>
  );
}

export default Header;
