import styled from "@emotion/styled";
import * as mediaQueries from "styles/media-queries";

const Nav = styled.div({
  [mediaQueries.small]: {
    display: "flex",
    justifyContent: "center",
    border: "2px solid yellow",
    padding: "1rem",
    position: "sticky",
    top: "0",
    zIndex: 1,
    backdropFilter: "blur(10px)",
  },
});

export { Nav };
