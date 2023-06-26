import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import SimpleCardSlider from "@/public/CardSlider";
import FlowIllustration from "@/public/FlowProcess";

export default function Home() {
  const cardsData = [
    {
      title: "Warehouse Services",
      content:
        "Fusce eu nisi eget mi ultricies semper vitae id urna. Cras fringilla hendrerit magna, sit.",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    },
    {
      title: "Supply Chain Planning",
      content:
        "Donec malesuada placerat odio. Morbi sollicitudin nisi ut molestie auctor. Proin eu quam et magna.",
      image:
        "https://images.unsplash.com/photo-1608303588026-884930af2559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=703&q=80",
    },
    {
      title: "Transportation Management ",
      content:
        "Sed sit amet interdum lorem. Proin ornare, massa sit amet bibendum imperdiet, magna erat ultricies.",
      image:
        "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ];

  const Card = ({ image, title, content }) => (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{content}</p>
        <button>Learn More</button>
      </div>
    </div>
  );

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
                SPECIALITIES
              </Link>
              <Link
                id={styles.anchor}
                to="SERVICE"
                smooth={true}
                duration={500}
                offset={-50}
              >
                SERVICES
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
          {/* Modificaions */}
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

  const Services = () => {
    return (
      <>
        <section className={styles.ServicesSection} id="SERVICE">
          <div className={styles.ServicesDiv}>
            <h1 id={styles.ServicesHeader}>Services</h1>
            <div className={styles.ServicesCarouselContainer}>
              <SimpleCardSlider>
                {cardsData.map((card, index) => (
                  <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    content={card.content}
                  />
                ))}
              </SimpleCardSlider>
            </div>
          </div>
        </section>
      </>
    );
  };

  const FlowProcess = () => {
    return (
      <>
        <section className={styles.FlowProcessSection}>
          <h1 className={styles.FlowProcessHeader}>Steps</h1>
          <div className={styles.FlowProcessDiv}>
            {/* <FlowProcess /> */}
            <FlowIllustration />
          </div>
        </section>
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
        <Services />
        <FlowProcess />
      </main>
    </>
  );
}
