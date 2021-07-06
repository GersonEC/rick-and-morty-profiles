import { render, screen } from "@testing-library/react";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { profileMock } from "utils/mocks";

test("renders a profile card with image, name, status, species and gender information", () => {
  render(<ProfileCard profile={profileMock} />);
  screen.getByRole("img");
  screen.getByRole("heading", { name: /name/i });
  screen.getByRole("heading", { name: /status/i });
  screen.getByRole("heading", { name: /species/i });
  screen.getByRole("heading", { name: /gender/i });
});
