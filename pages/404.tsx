import Link from "next/link";
import { Layout } from "../components";
import styles from "../styles/notFound.module.css";

const NotFoundPage = () => (
  <Layout title="404 | Factorem" showInsideMain={false}>
    <main className={styles.main}>
      <h1 className={styles.title}>Error 404</h1>
      <Link href="/">
        <a className={styles.button}>Go to Homepage</a>
      </Link>
    </main>
  </Layout>
);

export default NotFoundPage;
