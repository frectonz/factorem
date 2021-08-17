import Link from "next/link";
import Logo from "../svgs/Logo";
import CloseIcon from "../svgs/CloseIcon";
import styles from "../styles/menu.module.css";

interface Props {
  menuOpen: boolean;
  onCloseMenu: () => void;
}

export default function Menu({ menuOpen, onCloseMenu }: Props) {
  return (
    <menu
      className={styles.menu}
      style={{
        right: menuOpen ? "0" : "-200%",
      }}
    >
      <button className={styles.closeBtn} onClick={onCloseMenu}>
        <CloseIcon />
      </button>
      <Link href="/">
        <a className={styles.logo}>
          <Logo />
        </a>
      </Link>
      <div className={styles.social}>
        <a href="https://www.github.com/fraol0912">Github</a>
        <a href="https://twitter.com/FraolLemecha/">Twitter</a>
        <a href="https://www.linkedin.com/in/fraol-lemecha-4012361b8/">
          LinkedIn
        </a>
      </div>
    </menu>
  );
}
