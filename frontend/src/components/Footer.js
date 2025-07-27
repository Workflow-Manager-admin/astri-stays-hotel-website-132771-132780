import React from "react";
import styles from "../style.module.css";

// PUBLIC_INTERFACE
const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.footerFlex}`}>
      <div className={styles.footerSection}>
        <div className={styles.footerLogo}>LUXURY<br />HOTELS</div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.footerMenu}>About Us<br />Contact<br />Terms & Conditions</div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.footerSocial}>Facebook<br />Twitter<br />Instagram</div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.footerSub}>Subscribe to our newsletter</div>
        <div className={styles.newsletterBlock}>
          <input type="email" placeholder="Email Address" />
          <button className={styles.btn}>OK</button>
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.footerAddress}>
          497 Evergreen Rd. Roseville, CA 95673<br />
          +44 345 678 903<br />
          luxury_hotels@gmail.com
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
