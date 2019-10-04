import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Contact.module.css";
import { NavLink } from "react-router-dom";

const Contact = () => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      <h3>CONTACT US</h3>
      <h4>+380 66 319 5993</h4>
      <h4>mail@sannacode.com</h4>
      <h4>86 Kazymyra Malevicha Str, Kyiv</h4>

      <div>
        <a href="https://sannacode.com//" target="_blank">
          https://sannacode.com/
        </a>
      </div>
      <NavLink className={styles.nav} to={"/"}>
        <h2 className={styles.text}>Don`t thinking - call us right now!</h2>
      </NavLink>
    </main>
    <div className={styles.header}>
      <Footer />
    </div>
  </div>
);

export default Contact;
