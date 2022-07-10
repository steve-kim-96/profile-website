import { HamburgerMenu } from "../HamburgerMenu";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mount = () => render(<HamburgerMenu />);

describe("<HamburgerMenu />", () => {
  it("should correctly render hamburger menu", () => {
    const subject = mount();

    const hamburgerMenuButton = subject.getByText("Open Menu");
    expect(hamburgerMenuButton).toBeTruthy();
  });
});
