import * as React from "react";
import { ProfileContext } from "components/contexts/ProfileContext";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { ProfileModel } from "utils/models";
import { ProfileListContainer } from "./ProfileList.style";

export default function ProfileList(): JSX.Element {
  const profileList = React.useContext(ProfileContext);
  return (
    <ProfileListContainer>
      {profileList.map((item: ProfileModel) => {
        return <ProfileCard key={item.id} profile={item} />;
      })}
    </ProfileListContainer>
  );
}
