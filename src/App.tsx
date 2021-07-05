import * as React from "react";
import Header from "components/Header/Header";
import { ProfileApiInfo, ProfileModel } from "utils/models";
import { Layout, Body } from "./App.style";
import "./App.css";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { ProfileContext } from "contexts/ProfileContext";
import useVisibility from "components/hooks/useVisibility";
//IMPLEMENTARE INFINITE SCROLLING
//TESTARE APP:
//-Voglio testare che all'inizio la lunghezza sia di 20
//-Quando si va giù la lunghezza deve aumentare
//-I campi sulla Card devono essere Name, Status, Specied e Gender.
//-Ci deve essere un immagine sulla card
//-Quando clicco la Card ci devono essere 3 panels (Character's Information,
//Origin and Location e Chapters)
//-Testare il contenuto di ogni Panel

//Trasformare da Fetch a Axios
function App(): JSX.Element {
  const [profileList, setProfileList] = React.useState<ProfileModel[]>(
    [] as ProfileModel[]
  );
  const [profileApiInfo, setProfileApiInfo] = React.useState<ProfileApiInfo>(
    {} as ProfileApiInfo
  );
  const [loading, setLoading] = React.useState(false);
  const [offset, setOffset] = React.useState(0);

  const lastProfileCard = useVisibility(
    (visible: boolean) => {
      if (visible) {
        fetch(`${profileApiInfo.next}`)
          .then((response) => response.json())
          .then((data) => {
            const oldProfileList = [...profileList];
            const newProfileList = oldProfileList.concat(data.results);
            setProfileList(newProfileList);
            setOffset(offset + data.results.length);
          })
          .then(() => setLoading(false));
      }
    },
    [profileList, offset]
  );

  React.useEffect(() => {
    const getProfileList = () => {
      setLoading(true);
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((data) => {
          setProfileList(data.results);
          setProfileApiInfo(data.info);
          setOffset(data.results.length);
        })
        .then(() => setLoading(false));
    };
    getProfileList();
  }, []);

  return (
    <ProfileContext.Provider value={profileList}>
      <Layout>
        <Header />
        <Body>
          {/*<ProfileList />*/}
          {profileList.map((item: ProfileModel) => {
            return (
              <ProfileCard
                key={item.id}
                profile={item}
                ref={
                  profileList[profileList.length - 1].id === item.id
                    ? lastProfileCard
                    : null
                }
              />
            );
          })}
          <div>{loading && <h1>Loading</h1>}</div>
        </Body>
      </Layout>
    </ProfileContext.Provider>
  );
}

export default App;
