import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "/src/style/Navbar.css";

export function Navbar(): JSX.Element {
  return (
    <nav className="nav">
      <img src="/src/image/Netflix.svg" alt="Netflix logo" className="logo" />

      <aside className="nav__wrapper">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="nav__wrapper--icon"
        />
        <FontAwesomeIcon icon={faBell} className="nav__wrapper--icon" />

        <img src="/src/image/avatar.png" alt="Avatar" className="avatar" />
      </aside>
    </nav>
  );
}
