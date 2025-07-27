import React from "react";
import styles from "../style.module.css";

// PUBLIC_INTERFACE
const ContactUs = () => (
  <main>
    <section
      style={{
        position: "relative",
        width: "100vw",
        minHeight: 600,
        background: "url('https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2f981c1-9be7-48c8-b9f5-42e588eea850') center/cover no-repeat"
      }}
    >
      <div style={{
        background: "rgba(20, 39, 74, 0.6)",
        position: "absolute", inset: 0, zIndex: 1
      }}></div>
      <div className={`container`} style={{ paddingTop: 90, position: "relative", zIndex: 2 }}>
        <div className={styles.typoTitle} style={{ color: "var(--color-ffffff)" }}>CONTACT-US</div>
      </div>
    </section>

    <section className="container" style={{ margin: "60px auto 24px" }}>
      <div className={styles.typoTitle} style={{ marginBottom: 22, color: "var(--color-14274a)", textAlign: "left" }}>
        WE ARE HERE FOR YOU
      </div>
      <p className={styles.typoDesc} style={{ maxWidth: 880 }}>
        At Luxury Hotels, we take our customers seriously. Do you have any enquiries, complaints or requests, please forward it to our support desk and we will get back to you as soon as possible.
      </p>
    </section>

    <section className="container"
      style={{ margin: "100px auto", display: "flex", gap: 48, flexWrap: "wrap" }}>
      {/* Address, phone, map */}
      <div style={{ flex: 1, minWidth: 320, maxWidth: 470 }}>
        <div className={styles.typoButton} style={{ marginBottom: 24 }}>497 Evergreen Rd. Roseville, CA 95673</div>
        <div className={styles.typoDesc} style={{ marginBottom: 12 }}>Phone: +44 345 678 903<br />Email: luxury_hotels@gmail.com</div>
        <div className={styles.btn}
          style={{
            marginTop: 32,
            color: "var(--color-14274a)",
            background: "var(--color-ffffff)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            border: "2px solid var(--color-e0b973)",
            padding: "12px 24px"
          }}
        >View map &rarr;</div>
      </div>
      {/* Contact Form */}
      <form style={{
        flex: 1, minWidth: 320, maxWidth: 600, background: "var(--color-f7f7f7)",
        borderRadius: 14, padding: "40px 28px", boxSizing: "border-box"
      }}
        onSubmit={e => { e.preventDefault(); alert("Thank you for your message!"); }}
      >
        <label className={styles.typoDesc} htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" required />
        <label className={styles.typoDesc} htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Your email" required />
        <label className={styles.typoDesc} htmlFor="message">Message</label>
        <textarea id="message" rows={6} placeholder="Type your message here..." required />
        <div style={{ textAlign: "right", marginTop: 24 }}>
          <button className={styles.btn} type="submit">Submit</button>
        </div>
      </form>
    </section>
  </main>
);

export default ContactUs;
