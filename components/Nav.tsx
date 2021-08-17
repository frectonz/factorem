import Link from "next/link";
import Logo from "../svgs/Logo";
import styles from "../styles/navbar.module.css";

interface Props {
  onHamburgerClick: () => void;
}

export function Nav({ onHamburgerClick }: Props) {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo} aria-label="Back to homepage">
          <Logo />
        </a>
      </Link>

      <button className={styles.nav_hamburger} onClick={onHamburgerClick} />
    </nav>
  );
}

export default Nav;
