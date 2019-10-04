import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.css";

const About = () => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.main}>
      <div className={styles.about}>
        <h3>About</h3>
      </div>
      <div className={styles.text}>
        <p>
          Sannacode is a full-service, multi-disciplinary company that
          specializes in web and mobile design and development.
        </p>
        <p>
          We design, develop, test and maintain digital products ranging from
          web, mobile, games and wearable technologies. With headquarters in
          Kyiv and Boston,
        </p>
        <p>
          Sannacode has had tremendous success working with companies in every
          continent around the world.
        </p>
        <p>
          Our team has the talent and focus to bring clarity to your vision and
          create customized solutions that fit your needs.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);
export default About;
