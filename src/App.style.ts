import styled from "@emotion/styled";
import * as mediaQueries from "styles/media-queries";

const Layout = styled.div({
  [mediaQueries.small]: {
    display: "flex",
    flexDirection: "column",
    height: "99vh",
  },
});

const Body = styled.div({
  [mediaQueries.small]: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    padding: "2rem",
  },
});

export { Layout, Body };
