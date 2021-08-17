import styles from "../styles/hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__image}>
        <img src="/hero.jpeg" />
      </div>

      <div className={styles.hero__details}>
        <h2 className={styles.hero__title}>Factorem</h2>
        <p className={styles.hero__description}>
          Factorem is a blog written by Fraol Lemecha that talks about tech and
          other interesting things.
        </p>
      </div>
    </section>
  );
}
