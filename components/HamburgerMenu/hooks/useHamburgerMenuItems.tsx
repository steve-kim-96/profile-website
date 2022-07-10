import Link from "next/link";
import { styles } from "../styles/styles";

export const useHamburgerMenuItems = () => {
  const hamburgerMenuItems = [
    <Link key="0" href="/projects">
      <a style={styles.bmItem}>Projects</a>
    </Link>,
    <Link key="1" href="/">
      <a style={styles.bmItem}>Home</a>
    </Link>,
    <Link key="2" href="/developer">
      <a style={styles.bmItem}>Developer</a>
    </Link>,
  ];

  return {
    data: {
      hamburgerMenuItems,
    },
  };
};
