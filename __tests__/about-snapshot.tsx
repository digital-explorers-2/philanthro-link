import AboutPage from "@/app/about/page";
import { render } from "@testing-library/react";

describe("About page snapshot unchanged", () => {
  it("renders about page", () => {
    const { container } = render(<AboutPage />);
    expect(container).toMatchSnapshot();
  });
});
