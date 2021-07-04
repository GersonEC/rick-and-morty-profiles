import * as React from "react";
import { Place, ProfileModel } from "utils/models";
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
    const setEpisodeName = (episodeUrl: string) => {
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
      setEpisodeName(episodeUrl);
    });
  }, []);

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={[]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
    >
      <PanelStyled header="Character's Information" key="1">
        <ul>
          <li>Name: {props.profile.name}</li>
          <li>Status: {props.profile.status}</li>
          <li>Species: {props.profile.species}</li>
          <li>Type: {props.profile.type}</li>
          <li>Gender: {props.profile.gender}</li>
        </ul>
      </PanelStyled>
      <PanelStyled header="Origin and Location" key="2">
        <h4>Origin</h4>
        <ul>
          <li>Name: {origin.name}</li>
          <li>Type: {origin.type}</li>
          <li>Dimension: {origin.dimension}</li>
          <li>
            Amount of Residents: {origin.residents && origin.residents.length}
          </li>
        </ul>
        <h3>Location</h3>
        <ul>
          <li>Name: {location.name}</li>
          <li>Type: {location.type}</li>
          <li>Dimension: {location.dimension}</li>
          <li>
            Amount of Residents:{" "}
            {location.residents && location.residents.length}
          </li>
        </ul>
      </PanelStyled>
      <PanelStyled header="Chapters" key="3">
        {chapterNameList.map((chapterName, index) => {
          return (
            <ul key={index} style={{ marginBottom: "0px" }}>
              <li>{chapterName}</li>
            </ul>
          );
        })}
      </PanelStyled>
    </Collapse>
  );
}
