import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function Home() {
  const NavBar = () => {
    return (
      <>
        {/* The expression ${styles.navbar} and ${styles.sticky} are 
        used to concatenate CSS classes dynamically using template literals (${}) in JavaScript. */}
        <div className={styles.dummynavbarSpace}></div>
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
              <Link
                id={styles.anchor}
                to="INTRO"
                smooth={true}
                duration={500}
                offset={-50}
              >
                HOME
              </Link>
              <Link
                id={styles.anchor}
                to="SERVICES"
                smooth={true}
                duration={500}
                offset={-50}
              >
                SERVICES
              </Link>
              <Link
                id={styles.anchor}
                to="MORE"
                smooth={true}
                duration={500}
                offset={-50}
              >
                MORE
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  };

  const Intro = () => {
    return (
      <>
        <section className={styles.intro} id="INTRO">
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
        <section className={styles.SpecialitiesSection} id="SERVICES">
          <div className={styles.SpecialitiesDiv}>
            <p id={styles.SpecialitiesPara}>WHAT WE OFFER</p>
            <h2 id={styles.SpecialitiesHeader}>Our Specialities</h2>
          </div>
          <div className={styles.SpecialitiesCardParent}>
            <div className={styles.SpecialitiesCard}>
              <img src="logo-2.png" id={styles.SpecialitesCardImg} />
              <br />
              <h2 id={styles.SpecialitiesCardHead}>Decentralized Process</h2>
              <p className={styles.SpecialitiesCardPara}>
                No need for a concept of trust
              </p>
            </div>
            <div className={styles.SpecialitiesCard}>
              <img src="logo-4.png" id={styles.SpecialitesCardImg} />
              <br />
              <h2 id={styles.SpecialitiesCardHead}>Transparent Finances</h2>
              <p className={styles.SpecialitiesCardPara}>
                Record of every transaction available
              </p>
            </div>
            <div className={styles.SpecialitiesCard}>
              <img src="logo-1a.png" id={styles.SpecialitesCardImg} />
              <br />
              <h2 id={styles.SpecialitiesCardHead}>Seamless Delivery</h2>
              <p className={styles.SpecialitiesCardPara}>
                Smooth delivering of goods
              </p>
            </div>
            <div className={styles.SpecialitiesCard}>
              <img src="logo-3.png" id={styles.SpecialitesCardImg} />
              <br />
              <h2 id={styles.SpecialitiesCardHead}>Enhanced Security</h2>
              <p className={styles.SpecialitiesCardPara}>
                No chance of a single point of failure
              </p>
            </div>
          </div>
          <div className={styles.SpecialitesDivBtn}>
            <button id={styles.SpecialitesBtn}>MORE</button>
          </div>
        </section>
      </>
    );
  };

  const More = () => {
    return (
      <>
        <section id="MORE"></section>
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
          <p>Under Development!</p>
        </div>
        <Link
          id={styles.anchor}
          to="INTRO"
          smooth={true}
          duration={500}
          offset={-50}
        >
          <div className={styles.upBtnDiv}>
            <button id={styles.upBtn}>&uarr;</button>
          </div>
        </Link>

        <NavBar />
        <Intro />
        <Specialities />
      </main>
    </>
  );
}
