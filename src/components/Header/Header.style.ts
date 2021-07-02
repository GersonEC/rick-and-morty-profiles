import styled from "@emotion/styled";
import * as mediaQueries from "styles/media-queries";

const Nav = styled.div({
  [mediaQueries.small]: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
    position: "sticky",
    top: "0",
    zIndex: 1,
    boxShadow:
      "rgba(0, 0, 0, 0.07) 0px 0px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 5px 5px, rgba(0, 0, 0, 0.07) 0px 10px 11px",
  },
});

export { Nav };
