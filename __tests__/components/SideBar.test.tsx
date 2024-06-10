import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import SideBar from "@/components/SideBar";
import { useAuth } from "@/components/providers/AuthProvider";

jest.mock("next/navigation");
jest.mock("@/utils/supabase/client");
jest.mock("@/components/providers/AuthProvider");

describe("SideBar", () => {
  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ setUser: jest.fn() });
    (useRouter as jest.Mock).mockReturnValue({ replace: jest.fn() });
  });

  test("renders logo", () => {
    render(<SideBar />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders main section links", () => {
    render(<SideBar />);
    const dashboardLink = screen.getByText("Dashboard");
    const addDonationsLink = screen.getByText("Add Donations");
    const donationsLink = screen.getByText("Donations");
    expect(dashboardLink).toBeInTheDocument();
    expect(addDonationsLink).toBeInTheDocument();
    expect(donationsLink).toBeInTheDocument();
  });

  test("renders account section links", () => {
    render(<SideBar />);
    const logoutButton = screen.getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
  });

  test("calls signOut when logout button is clicked", async () => {
    const signOutMock = jest.fn();
    (createClient as jest.Mock).mockReturnValue({
      auth: { signOut: signOutMock },
    });
    render(<SideBar />);
    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);
    expect(signOutMock).toHaveBeenCalled();
  });
});
