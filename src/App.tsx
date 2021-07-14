import * as React from "react";
import Header from "./components/Header/Header";
import { ProfileApiInfo, ProfileModel } from "./utils/models";
import { Layout, Body, LoaderContainer } from "./App.style";
import ProfileList from "./components/ProfileList/ProfileList";
import { ProfileContext } from "./contexts/ProfileContext";
import useVisibility from "./hooks/useVisibility";
import { ErrorBoundary } from "react-error-boundary";
import { Spin } from "antd";
import ErrorFallback from "components/ErrorFallback/ErrorFallback";
import "antd/dist/antd.css";
import "./App.css";

export default function App(): JSX.Element {
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
        setLoading(true);
        fetch(`${profileApiInfo.next}`)
          .then((response) => response.json())
          .then((data) => {
            const oldProfileList = [...profileList];
            const newProfileList = oldProfileList.concat(data.results);
            setProfileList(newProfileList);
            setOffset(data.results ? offset + data.results.length : offset);
            setProfileApiInfo(data.info);
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
          setOffset(data.results ? data.results.length : 0);
        })
        .then(() => setLoading(false));
    };
    getProfileList();
  }, []);

  return (
    <ProfileContext.Provider value={profileList}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Layout>
          <Header />
          <Body>
            <ProfileList lastProfileCard={lastProfileCard} />
          </Body>
          <LoaderContainer>{loading && <Spin />}</LoaderContainer>
        </Layout>
      </ErrorBoundary>
    </ProfileContext.Provider>
  );
}
