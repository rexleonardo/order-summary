import React from "react";
import Image from "next/image";

import patternBackgroundMobile from "../../public/images/pattern-background-mobile.svg";
import patternBackgroundDesktop from "../../public/images/pattern-background-desktop.svg";
import illustrationHero from "../../public/images/illustration-hero.svg";
import iconMusic from "../../public/images/icon-music.svg";

import styles from "./page.module.scss";

const Home = () => {
  return (
    <div className={styles.backgroundContainer}>
      <Image
        src={patternBackgroundMobile}
        className={styles.backgroundMobile}
        alt={""}
      />
      <Image
        src={patternBackgroundDesktop}
        className={styles.backgroundDesktop}
        alt={""}
      />
      <main className={styles.mainContainer}>
        <Image
          src={illustrationHero}
          className={styles.illustration}
          alt={""}
        />
        <section className={styles.sectionContainer}>
          <h1>Order Summary</h1>
          <p className={styles.description}>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className={styles.planDetails}>
            <Image src={iconMusic} alt={""} />
            <div className={styles.planTypePriceContainer}>
              <p className={styles.planType}>Annual Plan</p>
              <p className={styles.planPrice}>$59.99/year</p>
            </div>
            <button className={styles.tertiaryButton}>Change</button>
          </div>
          <button className={styles.primaryButton}>Proceed to Payment</button>
          <button className={styles.secondaryButton}>Cancel Order</button>
        </section>
      </main>
    </div>
  );
};

export default Home;
