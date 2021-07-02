/** @jsxImportSource @emotion/react */
import { ProfileModel } from "utils/models";
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
  return (
    <CardContainer>
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
  );
}
