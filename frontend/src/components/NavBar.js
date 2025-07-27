import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../style.module.css";

// PUBLIC_INTERFACE
const NavBar = () => (
  <nav className={`container ${styles.nav}`} style={{ background: "transparent" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <span className={styles.footerLogo}>LUXURY HOTELS</span>
    </div>
    <div className={styles.menuBar}>
      <NavLink className={styles.typoMenu} to="/home">Home</NavLink>
      <NavLink className={styles.typoMenu} to="/facilities">Facilities</NavLink>
      <NavLink className={styles.typoMenu} to="/rooms">Rooms</NavLink>
      <NavLink className={styles.typoMenu} to="/contact-us">Contact-us</NavLink>
    </div>
  </nav>
);

export default NavBar;
