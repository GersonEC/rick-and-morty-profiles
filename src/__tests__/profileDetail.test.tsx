import { render, screen } from "@testing-library/react";
import ProfileDetail from "components/ProfileDetail/ProfileDetail";
import { profileMock } from "utils/mocks";

test("render profile detail with 3 panels", () => {
  render(<ProfileDetail profile={profileMock} />);
});

test("render profile detail character's information", () => {
  render(<ProfileDetail profile={profileMock} />);
});

test("render profile detail origin and location", () => {
  render(<ProfileDetail profile={profileMock} />);
});

test("render profile detail chapters", () => {
  render(<ProfileDetail profile={profileMock} />);
});
