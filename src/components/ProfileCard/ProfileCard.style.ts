import styled from "@emotion/styled";
import * as mediaQueries from "../../styles/media-queries";
import * as colors from "../../styles/colors";

const CardContainer = styled.div({
  display: "flex",
  minHeight: "10vh",
  minWidth: "20rem",
  gap: "0.5rem",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 7px",
  ":hover": {
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    transition: "0.3s",
    backgroundColor: colors.gray5,
  },
  [mediaQueries.small]: {
    minWidth: "10rem",
  },
});

const ImageContainer = styled.div({
  display: "flex",
  inlineSize: "10rem",
  alignItems: "center",
  justifyContent: "center",
  [mediaQueries.small]: {
    display: "flex",
    inlineSize: "35vw",
  },
});

const InfoContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "10rem",
  minWidth: "10rem",
  overflow: "auto",
  inlineSize: "10rem",
  [mediaQueries.small]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    inlineSize: "45vw",
  },
});

const H3 = styled.h3({
  fontFamily: "Helvetica",
  fontSize: "16px",
  fontWeight: "bold",
});

const H4 = styled.h4({
  fontFamily: "Helvetica",
  fontSize: "14px",
  fontStyle: "italic",

  width: "150px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const Info = styled.div({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  minHeight: "3vh",
});

export { CardContainer, ImageContainer, InfoContainer, H3, H4, Info };
