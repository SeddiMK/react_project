import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        Notes
      </a>

      <nav>
        <ul>
          <li>
            <NavLink className="" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/note">
              Note
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/create">
              Create
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
