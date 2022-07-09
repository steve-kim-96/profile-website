import Link from "next/link";

export const HamburgerMenu = () => (
  <button id="hamburger-menu">
    <nav id="sidebar-menu">
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/developer">
        <a>Developer</a>
      </Link>
    </nav>
  </button>
);
