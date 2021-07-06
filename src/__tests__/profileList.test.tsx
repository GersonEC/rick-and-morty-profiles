import { render, screen } from "@testing-library/react";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { profileMock } from "utils/mocks";

test("render 20 rick and morty profiles", () => {
  render(<ProfileCard profile={profileMock} />);
});
