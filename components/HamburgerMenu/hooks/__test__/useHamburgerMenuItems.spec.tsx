import { renderHook } from "@testing-library/react-hooks";
import { useHamburgerMenuItems } from "../useHamburgerMenuItems";

describe("useHamburgerMenuItems", () => {
  it("should return a list of hamburger menu items", () => {
    const { hamburgerMenuItems } = renderHook(() => useHamburgerMenuItems())
      .result.current.data;

    expect(hamburgerMenuItems).toHaveLength(2);
    expect(hamburgerMenuItems[0].props.href).toBe("/projects");
    expect(hamburgerMenuItems[1].props.href).toBe("/developer");
  });
});
