import { BsBellFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import "/src/style/Navbar.css";
import { useState } from "react";

export function Navbar(): JSX.Element {
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navbar ? "nav active" : "nav"}>
      <img
        tabIndex={1}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="nav__logo"
      />

      <img
        tabIndex={1}
        src="/src/Components/Assets/image/logo.png"
        alt="Netflix mobile logo"
        className="nav__log--mobile"
      />

      <aside className="nav__wrapper">
        <BiSearch className="wrapper__icon" />
        <BsBellFill className="wrapper__icon" />

        <img
          tabIndex={1}
          src="/src/Components/Assets/image/avatar.jpg"
          alt="Avatar"
          className="wrapper__avatar"
        />
      </aside>
    </nav>
  );
}
