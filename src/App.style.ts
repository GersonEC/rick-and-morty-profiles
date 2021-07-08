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
  [mediaQueries.small]: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    padding: "2rem",
  },
});

const LoaderContainer = styled.div({
  [mediaQueries.small]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
    margin: "2rem",
    zIndex: 1,
  },
});

export { Layout, Body, LoaderContainer };
