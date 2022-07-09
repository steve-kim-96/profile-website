import Link from "next/link";
import { styles } from "../styles/styles";

export const useHamburgerMenuItems = () => {
  const hamburgerMenuItems = [
    <Link href="/projects">
      <a style={styles.bmItem}>Projects</a>
    </Link>,
    <Link href="/developer">
      <a style={styles.bmItem}>Developer</a>
    </Link>,
  ];

  return {
    data: {
      hamburgerMenuItems,
    },
  };
};
