import ProfileCard from "components/ProfileCard/ProfileCard";
import { ProfileModel } from "utils/models";
import { ProfileListContainer } from "./ProfileList.style";
interface ProfileListProps {
  profileList: ProfileModel[];
}
export default function ProfileList(props: ProfileListProps): JSX.Element {
  return (
    <ProfileListContainer>
      {props.profileList.map((item: ProfileModel) => {
        return <ProfileCard key={item.id} profile={item} />;
      })}
    </ProfileListContainer>
  );
}
