import * as React from "react";
import { Nav } from "./Header.style";
import RickAndMortyLogo from "../../assets/images/rick_and_morty_logo.svg";

export default function Header(): JSX.Element {
  const onLogoClick = () => {
    window.scroll(0, 0);
  };

  return (
    <Nav>
      <img
        src={RickAndMortyLogo}
        width={200}
        alt="rick and morty"
        onClick={onLogoClick}
      />
    </Nav>
  );
}
