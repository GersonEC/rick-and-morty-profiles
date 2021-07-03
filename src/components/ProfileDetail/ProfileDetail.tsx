import { ProfileModel } from "utils/models";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { PanelStyled } from "./ProfileDetail.style";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

interface ProfileDetailProps {
  profile: ProfileModel;
}

export default function ProfileDetail(props: ProfileDetailProps): JSX.Element {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={[]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
    >
      <PanelStyled header="Character's Information" key="1">
        <p>{props.profile.name}</p>
      </PanelStyled>
      <PanelStyled header="Origin and Location" key="2">
        <p>{text}</p>
      </PanelStyled>
      <PanelStyled header="Chapters" key="3">
        <p>{text}</p>
      </PanelStyled>
    </Collapse>
  );
}
