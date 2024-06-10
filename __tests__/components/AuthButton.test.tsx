import { render, screen } from "@testing-library/react";

import AuthButton from "@/components/AuthButton";
import { useAuth } from "@/components/providers/AuthProvider";

jest.mock("@/components/providers/AuthProvider");

describe("AuthButton", () => {
  test("renders login button when user is not logged in", () => {
    (useAuth as jest.Mock).mockReturnValue({ user: null });

    render(<AuthButton />);

    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });

  test("renders user name and dashboard link when user is logged in", () => {
    const user = { user_metadata: { full_name: "John Doe" } };
    (useAuth as jest.Mock).mockReturnValue({ user });

    render(<AuthButton />);

    const userName = screen.getByText("Hey, John Doe!");
    const dashboardLink = screen.getByText("Dashboard");
    expect(userName).toBeInTheDocument();
    expect(dashboardLink).toBeInTheDocument();
  });
});
