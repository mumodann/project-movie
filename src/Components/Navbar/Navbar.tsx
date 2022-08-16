import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "/src/style/Navbar.css";
import { useState } from "react";

export function Navbar(): JSX.Element {
  const [navbar, setNavbar] = useState(false);

  const changeBac = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBac);
  return (
    <nav className={navbar ? "nav active" : "nav"}>
      <img
        src="/src/Components/Assets/image/Netflix.svg"
        alt="Netflix logo"
        className="logo"
      />

      <aside className="nav__wrapper">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="nav__wrapper--icon"
        />
        <FontAwesomeIcon icon={faBell} className="nav__wrapper--icon" />

        <img
          src="/src/Components/Assets/image/avatar.png"
          alt="Avatar"
          className="avatar"
        />
      </aside>
    </nav>
  );
}
