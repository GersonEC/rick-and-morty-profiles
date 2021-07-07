import styled from "@emotion/styled";
import * as mediaQueries from "../../styles/media-queries";
import { Collapse } from "antd";
const { Panel } = Collapse;

const PanelStyled = styled(Panel)({
  [mediaQueries.small]: {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 7px",
    marginBottom: "2rem",
    fontFamily: "Tahoma",
    fontSize: "14px",
  },
});

export { PanelStyled };
