import * as React from "react";
import Header from "components/Header/Header";
import { ProfileApiInfo, ProfileModel } from "utils/models";
import { Layout, Body } from "./App.style";
import "./App.css";
import ProfileList from "components/ProfileList/ProfileList";
import { ProfileContext } from "components/contexts/ProfileContext";

function App(): JSX.Element {
  const [profileList, setProfileList] = React.useState<ProfileModel[]>([]);
  const [profileApiInfo, setProfileApiInfo] = React.useState<ProfileApiInfo>(
    {} as ProfileApiInfo
  );
  React.useEffect(() => {
    const getProfileList = () => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
          setProfileApiInfo(data.info);
          setProfileList(data.results);
        });
    };
    getProfileList();
  }, []);

  console.log(profileApiInfo);
  return (
    <ProfileContext.Provider value={profileList}>
      <Layout>
        <Header />
        <Body>
          <ProfileList />
        </Body>
      </Layout>
    </ProfileContext.Provider>
  );
}

export default App;
