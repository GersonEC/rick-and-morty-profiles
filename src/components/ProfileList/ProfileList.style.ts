import styled from "@emotion/styled";
import * as mediaQueries from "../../styles/media-queries";

const ProfileListContainer = styled.div({
  display: "flex",
  gap: "2rem",
  flexWrap: "wrap",
  justifyContent: "center",
  [mediaQueries.small]: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
});

export { ProfileListContainer };
