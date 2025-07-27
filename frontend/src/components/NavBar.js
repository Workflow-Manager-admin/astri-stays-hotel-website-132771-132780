import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../style.module.css";

// PUBLIC_INTERFACE
/**
 * Pixel-perfect NavBar as per Figma and static HTML.
 */
const NavBar = () => (
  <nav className={`container ${styles.navbar}`} style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
    paddingTop: 56,
    background: "transparent"
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span className={styles.footerLogo}>LUXURY&nbsp;HOTELS</span>
    </div>
    <div className={styles.menuBar}>
      <NavLink
        className={styles.typoMenu}
        style={({ isActive }) => ({
          color: isActive ? "var(--color-e0b973)" : "var(--color-ffffff)",
          textDecoration: "none"
        })}
        to="/home"
        end
      >Home</NavLink>
      <NavLink
        className={styles.typoMenu}
        style={({ isActive }) => ({
          color: isActive ? "var(--color-e0b973)" : "var(--color-ffffff)",
          textDecoration: "none"
        })}
        to="/facilities"
      >Facilities</NavLink>
      <NavLink
        className={styles.typoMenu}
        style={({ isActive }) => ({
          color: isActive ? "var(--color-e0b973)" : "var(--color-ffffff)",
          textDecoration: "none"
        })}
        to="/rooms"
      >Rooms</NavLink>
      <NavLink
        className={styles.typoMenu}
        style={({ isActive }) => ({
          color: isActive ? "var(--color-e0b973)" : "var(--color-ffffff)",
          textDecoration: "none"
        })}
        to="/contact-us"
      >Contact-us</NavLink>
    </div>
  </nav>
);

export default NavBar;
