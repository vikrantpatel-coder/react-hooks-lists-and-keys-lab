import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, id) => (
        <a key={id} href={"#home, #about, #projects"}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
