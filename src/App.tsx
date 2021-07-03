import * as React from "react";
import Header from "components/Header/Header";
import { ProfileModel } from "utils/models";
import { Layout, Body } from "./App.style";
import "./App.css";
import ProfileList from "components/ProfileList/ProfileList";
import { ProfileContext } from "components/contexts/ProfileContext";

function App(): JSX.Element {
  const [profileList, setProfileList] = React.useState<ProfileModel[]>([]);

  React.useEffect(() => {
    const getProfileList = () => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProfileList(data.results);
        });
    };
    getProfileList();
  }, []);

  return (
    <ProfileContext.Provider value={profileList}>
      <Layout>
        <Header />
        <Body>
          <ProfileList profileList={profileList} />
        </Body>
      </Layout>
    </ProfileContext.Provider>
  );
}

export default App;
