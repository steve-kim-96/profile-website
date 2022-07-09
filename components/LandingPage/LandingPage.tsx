import Head from "next/head";
import styles from "@styles/Home.module.css";
import { Footer } from "../Footer";
import { HamburgerMenu } from "@components/HamburgerMenu";

export const LandingPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Steve Kim</title>
      <meta name="description" content="Steve Kim" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HamburgerMenu />
    <main className={styles.main}>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>

    <Footer />
  </div>
);
