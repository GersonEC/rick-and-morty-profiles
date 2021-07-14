import styled from "@emotion/styled";
import { Collapse } from "antd";
const { Panel } = Collapse;

const PanelStyled = styled(Panel)({
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 7px",
  marginBottom: "2rem",
  fontFamily: "Tahoma",
  fontSize: "14px",
});

export { PanelStyled };
