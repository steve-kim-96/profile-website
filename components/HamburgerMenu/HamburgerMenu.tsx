import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { useHamburgerMenuItems } from "./hooks/useHamburgerMenuItems";
import { styles } from "./styles/styles";

export const HamburgerMenu = () => {
  const {
    data: { hamburgerMenuItems },
  } = useHamburgerMenuItems();
  return (
    <Menu styles={styles}>
      {hamburgerMenuItems}
    </Menu>
  );
};
