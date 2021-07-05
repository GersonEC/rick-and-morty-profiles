import * as React from "react";
import { ProfileContext } from "contexts/ProfileContext";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { ProfileModel } from "utils/models";
import { ProfileListContainer } from "./ProfileList.style";

export default function ProfileList(): JSX.Element {
  const profileList = React.useContext(ProfileContext);
  return (
    <ProfileListContainer>
      {/*profileList.map((item: ProfileModel, index) => {
        if (profileList.length === index + 1){
          return <div ref={}> <ProfileCard key={item.id} profile={item} /> </div>
        }
        return <ProfileCard key={item.id} profile={item} />;
      })*/}
    </ProfileListContainer>
  );
}
