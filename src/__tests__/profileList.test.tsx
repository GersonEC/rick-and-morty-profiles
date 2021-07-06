import { render, screen } from "@testing-library/react";
import ProfileList from "components/ProfileList/ProfileList";
import { profileListMock } from "utils/mocks";
import { ProfileContext } from "contexts/ProfileContext";

test("render 2 rick and morty profiles", () => {
  render(
    <ProfileContext.Provider value={profileListMock}>
      <ProfileList />{" "}
    </ProfileContext.Provider>
  );
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(2);
});
