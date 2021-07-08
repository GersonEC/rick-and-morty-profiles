import * as React from "react";
import { Place, ProfileModel } from "../../utils/models";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { PanelStyled } from "./ProfileDetail.style";

interface ProfileDetailProps {
  profile: ProfileModel;
}

enum PlaceType {
  ORIGIN = "origin",
  LOCATION = "location",
}

export default function ProfileDetail(props: ProfileDetailProps): JSX.Element {
  const [origin, setOrigin] = React.useState<Place>({} as Place);
  const [location, setLocation] = React.useState<Place>({} as Place);
  const [chapterNameList, setChapterNameList] = React.useState<string[]>([]);

  React.useEffect(() => {
    const setPlace = (placeUrl: string, placeType: PlaceType) => {
      fetch(placeUrl)
        .then((response) => response.json())
        .then((data) => {
          if (placeType === PlaceType.ORIGIN) {
            setOrigin(data);
          } else if (placeType === PlaceType.LOCATION) {
            setLocation(data);
          }
        });
    };
    const originPlaceUrl = props.profile.origin.url;
    const locationPlaceUrl = props.profile.location.url;
    setPlace(originPlaceUrl, PlaceType.ORIGIN);
    setPlace(locationPlaceUrl, PlaceType.LOCATION);
  }, []);

  React.useEffect(() => {
    const chapterNameList: string[] = [];
    const episodeUrlList = props.profile.episode;
    const setChapters = (episodeUrl: string) => {
      fetch(episodeUrl)
        .then((response) => response.json())
        .then((data) => {
          chapterNameList.push(data.name);
        })
        .then(() => {
          if (chapterNameList.length === episodeUrlList.length) {
            setChapterNameList(chapterNameList);
          }
        });
    };
    episodeUrlList.forEach((episodeUrl) => {
      setChapters(episodeUrl);
    });
  }, []);

  const renderCharacterInfo = (profile: ProfileModel): JSX.Element => {
    return (
      <ul>
        <li>Name: {profile.name}</li>
        <li>Status: {profile.status}</li>
        <li>Species: {profile.species}</li>
        <li>Type: {profile.type}</li>
        <li>Gender: {profile.gender}</li>
      </ul>
    );
  };

  const renderPlaceInfo = (place: Place): JSX.Element => {
    return (
      <ul>
        <li>Name: {place.name}</li>
        <li>Type: {place.type}</li>
        <li>Dimension: {place.dimension}</li>
        <li>
          Amount of Residents: {place.residents && place.residents.length}
        </li>
      </ul>
    );
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={[]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
    >
      <PanelStyled header="Character's Information" key="1">
        {renderCharacterInfo(props.profile)}
      </PanelStyled>
      <PanelStyled header="Origin and Location" key="2">
        <h4>Origin</h4>
        {renderPlaceInfo(origin)}
        <h3>Location</h3>
        {renderPlaceInfo(location)}
      </PanelStyled>
      <PanelStyled header="Chapters" key="3">
        {chapterNameList.sort().map((chapterName, index) => {
          return (
            <ul role={"listitem"} key={index} style={{ marginBottom: "0px" }}>
              <li>{chapterName}</li>
            </ul>
          );
        })}
      </PanelStyled>
    </Collapse>
  );
}
