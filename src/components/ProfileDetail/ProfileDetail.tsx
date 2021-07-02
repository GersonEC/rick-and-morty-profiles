import { ProfileModel } from "utils/models";

interface ProfileDetailProps {
  profile: ProfileModel;
}

export default function ProfileDetail(props: ProfileDetailProps): JSX.Element {
  return (
    <div>
      <p>{props.profile.species}</p>
      <p>{props.profile.name}</p>
      <p>Some contents...</p>
    </div>
  );
}
