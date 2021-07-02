import styled from "@emotion/styled";
import * as mediaQueries from "styles/media-queries";

const ProfileListContainer = styled.div({
  [mediaQueries.small]: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
});

export { ProfileListContainer };
