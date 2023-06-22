import "./nav.scss";

function Nav() {
  const menuItems = ["about", "benefits", "contacts"];

  return (
    <nav className="container">
      <ul>
        {menuItems.map((item, index) => {
          return (
            <li key={`menuItem-${index}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
