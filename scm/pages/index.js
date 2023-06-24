import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const NavBar = () => {
    return (
      <>
        {/* The expression ${styles.navbar} and ${styles.sticky} are 
        used to concatenate CSS classes dynamically using template literals (${}) in JavaScript. */}
        <nav className={`${styles.navbar} ${styles.sticky}`}>
          <div className={styles.navbarDivLeft}>
            <div className={styles.navBarLeftSub}>
              {/* <img src="" alt="Logo"></img> */}
              <a href="" target="_top">
                CHAINLINK
              </a>
            </div>
          </div>
          <div className={styles.navbarDivRight}>
            <div className={styles.navBarRightSub}>
              <a href="" id={styles.anchor}>
                HOME
              </a>
              <a href="" id={styles.anchor}>
                ABOUT US
              </a>
              <a href="" id={styles.anchor}>
                CONTACT US
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  };

  const Intro = () => {
    return (
      <>
        <section className={styles.intro}>
          <div className={styles.introDiv}>
            <p id={styles.intro1}>DECENTRALIZED</p>
            <h1 id={styles.H1}>
              Supply Chain <br />
              <span id={styles.intro2}>Solutions</span>
            </h1>
            <p id={styles.intorPara}>
              Elevate your supply chain with our decentralized platform,
              <br />
              driving efficiency and transparency
            </p>
            <button id={styles.introBtn}>READ MORE</button>
          </div>
        </section>
      </>
    );
  };

  const Specialities = () => {
    return (
      <>
        <section></section>
      </>
    );
  };
  return (
    <>
      <Head>
        <title>Supply Chain Management</title>
        <meta
          name="description"
          content="Decentralized Supply chain management"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.body}>
        <div className={styles.banner}>
          <p>Beta testing!</p>
        </div>
        <NavBar />

        <Intro />
        <Specialities />
      </main>
    </>
  );
}
