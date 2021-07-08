import * as React from "react";
import { ProfileContext } from "../../contexts/ProfileContext";
import ProfileCard from "../ProfileCard/ProfileCard";
import { ProfileModel } from "../../utils/models";
import { ProfileListContainer } from "./ProfileList.style";

interface ProfileListProps {
  lastProfileCard?: React.Ref<HTMLDivElement>;
}

export default function ProfileList(props: ProfileListProps): JSX.Element {
  const profileList = React.useContext(ProfileContext);
  return (
    <ProfileListContainer>
      {profileList.map((item: ProfileModel) => {
        return (
          <div role={"listitem"} key={item.id}>
            <ProfileCard
              profile={item}
              ref={
                profileList[profileList.length - 1].id === item.id
                  ? props.lastProfileCard
                  : null
              }
            />
          </div>
        );
      })}
    </ProfileListContainer>
  );
}
