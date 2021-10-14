import * as React from 'react';
import { ProfileApiInfo, ProfileModel } from 'utils/models';
import useVisibility from './useVisibility';

export const useProfilesWithIntObserver = () => {
  const [profileList, setProfileList] = React.useState<ProfileModel[]>(
    [] as ProfileModel[]
  );
  const [loading, setLoading] = React.useState(false);
  const [profileApiInfo, setProfileApiInfo] = React.useState<ProfileApiInfo>(
    {} as ProfileApiInfo
  );
  const [offset, setOffset] = React.useState(0);
  const [error, setError] = React.useState(null);

  const lastProfileCard = useVisibility(
    (visible: boolean) => {
      if (visible) {
        setLoading(true);
        fetch(`${profileApiInfo.next}`)
          .then((response) => response.json())
          .then((data) => {
            const oldProfileList = [...profileList];
            const newProfileList = oldProfileList.concat(data.results);
            setProfileList(newProfileList);
            setOffset(data.results ? offset + data.results.length : offset);
            setProfileApiInfo(data.info);
          })
          .then(() => setLoading(false));
      }
    },
    [profileList, offset]
  );

  React.useEffect(() => {
    const getProfileList = () => {
      try {
        setLoading(true);
        fetch(`https://rickandmortyapi.com/api/character`)
          .then((response) => response.json())
          .then((data) => {
            setProfileList(data.results);
            setProfileApiInfo(data.info);
            setOffset(data.results ? data.results.length : 0);
          })
          .then(() => setLoading(false));
      } catch (error: any) {
        setError(error.message)
      }
      
    };
    getProfileList();
  }, []);

  return {
    profileList,
    setProfileList,
    lastProfileCard,
    loading,
    error
  };
}