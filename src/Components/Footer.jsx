import styles from "./Footer";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.Copyright}>
        &copy; Copyright {new Date().getFullYear()} by world wise Inc.
      </p>
    </footer>
  );
}

export default Footer;
