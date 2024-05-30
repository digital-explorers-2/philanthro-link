import { render } from "@testing-library/react";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";

describe("Landing page snapshot unchanged", () => {
  it("renders hero section", () => {
    const { container } = render(<HeroSection />);
    expect(container).toMatchSnapshot();
  });
  it("renders about section", () => {
    const { container } = render(<AboutSection />);
    expect(container).toMatchSnapshot();
  });
});
