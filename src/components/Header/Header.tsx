import { Nav } from "./Header.style";
import RickAndMortyLogo from "../../assets/images/rick_and_morty_logo.svg";

export default function Header(): JSX.Element {
  return (
    <Nav>
      <img src={RickAndMortyLogo} width={200} alt="rick and morty" />
    </Nav>
  );
}
