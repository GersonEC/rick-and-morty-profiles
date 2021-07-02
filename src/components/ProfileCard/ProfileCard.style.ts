import styled from "@emotion/styled";
import * as mediaQueries from "styles/media-queries";

const CardContainer = styled.div({
  [mediaQueries.small]: {
    display: "flex",
    minHeight: "20vh",
    gap: "0.5rem",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 7px",
    ":hover": {
      cursor: "pointer",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      transition: "0.3s",
    },
  },
});

const ImageContainer = styled.div({
  [mediaQueries.small]: {
    display: "flex",
    inlineSize: "40vw",
    alignItems: "center",
    justifyContent: "center",
  },
});

const InfoContainer = styled.div({
  [mediaQueries.small]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    inlineSize: "55vw",
  },
});

const H3 = styled.h3({
  [mediaQueries.small]: {
    fontFamily: "Helvetica",
    fontSize: "16px",
    fontWeight: "bold",
  },
});

const H4 = styled.h4({
  [mediaQueries.small]: {
    fontFamily: "Helvetica",
    fontSize: "14px",
    fontStyle: "italic",
  },
});

const Info = styled.div({
  [mediaQueries.small]: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    height: "4vh",
  },
});

export { CardContainer, ImageContainer, InfoContainer, H3, H4, Info };
