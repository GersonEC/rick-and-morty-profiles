import styled from "@emotion/styled";
import * as mediaQueries from "styles/media-queries";

/*type ContentProps = {
  urlimage?: string;
};

const Cell = styled.div<ContentProps>(
  {
    backgroundColor: colors.black,
    maxWidth: '50%',
    "&:hover": {
      opacity: '0.95'
    },
    [mediaQueries.small]: {
      minWidth: '100%',
    },
    [mediaQueries.medium]: {
      minWidth: '100%',
    }
  },
  props => ({
    background: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${props.urlimage}) no-repeat`,
    backgroundSize: '100%',
  }),
)
*/

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
    gap: "2rem",
    padding: "2rem",
  },
});

export { Layout, Body };
