/** @jsxImportSource @emotion/react */
import * as React from "react";
import { ProfileModel } from "utils/models";
import { Modal } from "antd";
import "antd/dist/antd.css";
import ProfileDetail from "components/ProfileDetail/ProfileDetail";
import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  H3,
  H4,
  Info,
} from "./ProfileCard.style";

interface ProfileCardProps {
  profile: ProfileModel;
}

export default function ProfileCard(props: ProfileCardProps): JSX.Element {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const onCardClick = (): void => setIsModalVisible(!isModalVisible);
  const onModalCancel = (): void => setIsModalVisible(false);

  return (
    <>
      <CardContainer onClick={onCardClick}>
        <ImageContainer>
          <img
            css={[
              {
                border: "1px solid black",
                borderRadius: "5rem",
              },
            ]}
            src={props.profile.image}
            width={110}
            height={110}
            alt={props.profile.name}
          />
        </ImageContainer>
        <InfoContainer>
          <Info>
            <H3>Name:</H3>
            <H4>{props.profile.name}</H4>
          </Info>
          <Info>
            <H3>Status:</H3>
            <H4>{props.profile.status}</H4>
          </Info>
          <Info>
            <H3>Species:</H3>
            <H4>{props.profile.species}</H4>
          </Info>
          <Info>
            <H3>Gender:</H3>
            <H4>{props.profile.gender}</H4>
          </Info>
        </InfoContainer>
      </CardContainer>
      <Modal
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          height: 530,
          overflow: "auto",
        }}
        title={""}
        visible={isModalVisible}
        onCancel={onModalCancel}
        footer={[]}
      >
        <img
          css={{
            borderRadius: "5rem",
          }}
          src={props.profile.image}
          alt={props.profile.name}
          title={props.profile.name}
          width={80}
        />
        <ProfileDetail profile={props.profile} />
      </Modal>
    </>
  );
}
