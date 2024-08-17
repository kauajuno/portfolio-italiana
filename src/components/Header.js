import "../styles/Header.css";

function Header() {
  return (
    <nav>
      <span className="logo">
        <a>
          Itali<span className="logo-span">ana</span>
        </a>
      </span>
      <ul className="nav-items">
        <li>
          <a href="google.com">Products</a>
        </li>
        <li>
          <a href="google.com">FAQ</a>
        </li>
        <li>
          <a href="google.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
