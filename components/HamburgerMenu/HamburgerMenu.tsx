import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./styles";

export const HamburgerMenu = () => (
  <Menu styles={styles}>
    <Link href="/projects">
      <a style={styles.bmItem}>Projects</a>
    </Link>
    <Link href="/developer">
      <a style={styles.bmItem}>Developer</a>
    </Link>
  </Menu>
);
