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
        <a href="https://github.com/steve-kim-96" className={styles.card}>
          <h2>Github &rarr;</h2>
          <img src="/github-logo.svg" alt="Github Logo" />
        </a>

        <a
          href="https://www.linkedin.com/in/steve-soungku-kim/"
          className={styles.card}
        >
          <h2>LinkedIn &rarr;</h2>
          <img src="/linkedin-logo.svg" alt="LinkedIn Logo" />
        </a>

        <a
          href="https://drive.google.com/file/d/1Wxh4AMv5mB8aOkf_XC4FKcfW0YjoVjzf/view?usp=sharing"
          className={styles.card}
        >
          <h2>CV &rarr;</h2>
          <img src="/cv-logo.svg" alt="CV Logo" />
        </a>

        <a
          href="https://www.upwork.com/freelancers/~01616f97733da7d799"
          className={styles.card}
        >
          <h2>Upwork &rarr;</h2>
          <img src="/upwork-logo.svg" alt="Upwork Logo" />
        </a>
      </div>
    </main>

    <Footer />
  </div>
);
