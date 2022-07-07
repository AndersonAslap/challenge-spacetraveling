import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerNav}>
        <img src="/Logo.svg" alt="logo" />
      </nav>
    </header>
  );
}
