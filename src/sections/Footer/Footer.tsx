import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        Icons by{" "}
        <a href="https://icons8.com/" target="_blank">
          icons8
        </a>
        .
      </p>
    </section>
  );
}

export default Footer;
