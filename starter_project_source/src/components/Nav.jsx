import "./styles/nav.scss";

function Nav({ navItems }) {
  return (
    <nav className="container">
      <ul>
        {navItems?.map((item, index) => {
          return (
            <li key={`navItems-${index}`}>
              <a href={`${item.url}`}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
