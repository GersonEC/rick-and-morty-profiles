import styled from "@emotion/styled";
import * as mediaQueries from "./styles/media-queries";

const Layout = styled.div({
  [mediaQueries.small]: {
    display: "flex",
    flexDirection: "column",
    height: "99vh",
  },
});

const Body = styled.main({
  display: "flex",
  padding: "2rem",
  overflow: "auto",
  [mediaQueries.small]: {
    display: "flex",
    flexDirection: "column",
  },
});

const LoaderContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "20vh",
  margin: "2rem",
  zIndex: 1,
});

export { Layout, Body, LoaderContainer };
