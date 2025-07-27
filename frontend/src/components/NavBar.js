import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../style.module.css";

// PUBLIC_INTERFACE
/**
 * Pixel-perfect NavBar as per Figma and static HTML with full CSS module styling.
 */
const NavBar = () => (
  <nav className={`container ${styles.navbar}`}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span className={styles.footerLogo}>LUXURY&nbsp;HOTELS</span>
    </div>
    <div className={styles.menuBar}>
      <NavLink
        className={({ isActive }) =>
          `${styles.typoMenu} ${isActive ? styles.menuActive : ""}`
        }
        to="/home"
        end
      >Home</NavLink>
      <NavLink
        className={({ isActive }) =>
          `${styles.typoMenu} ${isActive ? styles.menuActive : ""}`
        }
        to="/facilities"
      >Facilities</NavLink>
      <NavLink
        className={({ isActive }) =>
          `${styles.typoMenu} ${isActive ? styles.menuActive : ""}`
        }
        to="/rooms"
      >Rooms</NavLink>
      <NavLink
        className={({ isActive }) =>
          `${styles.typoMenu} ${isActive ? styles.menuActive : ""}`
        }
        to="/contact-us"
      >Contact-us</NavLink>
    </div>
  </nav>
);

export default NavBar;
