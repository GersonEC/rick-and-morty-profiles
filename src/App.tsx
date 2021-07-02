import Header from "components/Header/Header";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { ProfileModel } from "utils/models";
import { Layout, Body } from "./App.style";
import "./App.css";

const profile: ProfileModel = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  created: "2017-11-04T18:48:46.250Z",
};

function App(): JSX.Element {
  return (
    <Layout>
      <Header />
      <Body>
        <ProfileCard profile={profile} />
        <ProfileCard profile={profile} />
        <ProfileCard profile={profile} />
        <ProfileCard profile={profile} />
        <ProfileCard profile={profile} />
        <ProfileCard profile={profile} />
        <ProfileCard profile={profile} />
        <ProfileCard profile={profile} />
        <ProfileCard profile={profile} />
        <ProfileCard profile={profile} />
        <ProfileCard profile={profile} />
        <ProfileCard profile={profile} />
      </Body>
    </Layout>
  );
}

export default App;
