import { render, screen } from "@testing-library/react";
import Login from "./page";

it("Login Page: Displays 'Sign in' text", () => {
  render(<Login />);
  expect(screen.getByRole("heading")).toHaveTextContent("Sign in");
});
