import * as React from "react";
import Header from "./components/Header/Header";
import { Layout, Body, LoaderContainer } from "./App.style";
import ProfileList from "./components/ProfileList/ProfileList";
import { ProfileContext } from "./contexts/ProfileContext";
import { ErrorBoundary } from "react-error-boundary";
import { Spin } from "antd";
import ErrorFallback from "components/ErrorFallback/ErrorFallback";
import "antd/dist/antd.css";
import "./App.css";
import { useProfilesWithIntObserver } from 'hooks/useProfilesWithIntObserver';

export default function App(): JSX.Element {
  const { profileList, lastProfileCard, loading, error } = useProfilesWithIntObserver();

  if(error) {
    return <div>Errore: {error}</div>
  }

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
