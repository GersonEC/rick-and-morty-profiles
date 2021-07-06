import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProfileDetail from "components/ProfileDetail/ProfileDetail";
import { profileMock } from "utils/mocks";

test("render profile detail with 3 panels", () => {
  render(<ProfileDetail profile={profileMock} />);
  screen.getByText(/character's information/i);
  screen.getByText(/origin and location/i);
  screen.getByText(/chapters/i);
});

test("render profile detail character's information", () => {
  render(<ProfileDetail profile={profileMock} />);
  const characterInfoPanel = screen.getByText(/character's information/i);

  userEvent.click(characterInfoPanel);

  expect(screen.getByText(/name/i)).toBeInTheDocument();
  expect(screen.getByText(/status/i)).toBeInTheDocument();
  expect(screen.getByText(/species/i)).toBeInTheDocument();
  expect(screen.getByText(/type/i)).toBeInTheDocument();
  expect(screen.getByText(/gender/i)).toBeInTheDocument();
});

test("render profile detail origin and location", () => {
  render(<ProfileDetail profile={profileMock} />);
  const placePanel = screen.getByText(/origin and location/i);

  userEvent.click(placePanel);

  screen.getAllByText(/name/i);
  screen.getAllByText(/type/i);
  screen.getAllByText(/dimension/i);
  screen.getAllByText(/amount of residents/i);
});
