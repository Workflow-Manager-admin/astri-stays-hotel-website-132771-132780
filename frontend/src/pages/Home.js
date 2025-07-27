import React from "react";
import styles from "../style.module.css";

// PUBLIC_INTERFACE
const Home = () => (
  <main>
    <section
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "900px",
        background: "url('https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2f981c1-9be7-48c8-b9f5-42e588eea850') center/cover no-repeat"
      }}
    >
      <div style={{
        background: "rgba(20, 39, 74, 0.6)",
        position: "absolute", inset: 0, zIndex: 1
      }} />
      <div className={`container`} style={{ paddingTop: 160, position: "relative", zIndex: 2 }}>
        <div className={styles.typoSectionTitle} style={{ marginBottom: 0 }}>LUXURY</div>
        <div className={styles.typoSectionTitle} style={{ marginTop: 0 }}>HOTELS</div>
        <div className={styles.typoSubtitle} style={{
          color: "var(--color-ffffff)", margin: "24px 0 0 0"
        }}>WELCOME TO</div>
        <div className={styles.typoDesc} style={{
          color: "var(--color-ffffff)", margin: "40px 0 24px 0", maxWidth: 600
        }}>
          Book your stay and enjoy Luxury redefined at the most affordable rates.
        </div>
        <a href="/rooms" className={styles.btn} style={{ margin: "40px 0 0 0" }}>BOOK NOW</a>
        <div style={{
          marginTop: 96, display: "flex", flexDirection: "column", alignItems: "center"
        }}>
          <span style={{
            width: 60, height: 60, borderRadius: "50%",
            border: "2px solid var(--color-ffffff)", display: "inline-block"
          }} />
          <div className={styles.typoButton}
            style={{ marginTop: 12, color: "var(--color-ffffff)" }}>Scroll</div>
        </div>
      </div>
    </section>

    <section className="container" style={{ textAlign: "center", margin: "60px auto 24px" }}>
      <div className={styles.typoSubtitle} style={{ color: "var(--color-14274a)", marginBottom: 18 }}>
        All our room types are including complementary breakfast
      </div>
    </section>

    <section className="container" style={{
      margin: "100px auto 60px", display: "flex", gap: 60, alignItems: "center", flexWrap: "wrap"
    }}>
      <div style={{ flex: 1, minWidth: 360, maxWidth: 620 }}>
        <h2 className={styles.typoTitle} style={{ marginBottom: 22 }}>Luxury redefined</h2>
        <p className={styles.typoDesc} style={{ marginBottom: 34 }}>
          Our rooms are designed to transport you into an environment made for leisure. Take your mind off
          the day-to-day of home life and find a private paradise for yourself.
        </p>
        <a href="/facilities" className={styles.btn}>EXPLORE</a>
      </div>
      <div style={{ flex: 1, minWidth: 300 }}>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="luxury room"
          style={{ width: "100%", maxWidth: 466, borderRadius: 16, border: "4px solid var(--color-e0b973)" }}
        />
      </div>
    </section>

    <section className="container" style={{
      margin: "60px auto 60px", display: "flex", gap: 60, alignItems: "center", flexWrap: "wrap"
    }}>
      <div style={{ flex: 1, minWidth: 300 }}>
        <img
          src="https://images.unsplash.com/photo-1508357551815-bb5ceab6ecb2"
          alt="beach"
          style={{ width: "100%", maxWidth: 466, borderRadius: 16, border: "4px solid var(--color-e0b973)" }}
        />
      </div>
      <div style={{ flex: 1, minWidth: 360, maxWidth: 620 }}>
        <h2 className={styles.typoTitle} style={{ marginBottom: 22 }}>Leave your worries in the sand</h2>
        <p className={styles.typoDesc} style={{ marginBottom: 34 }}>
          We love life at the beach. Being close to the ocean with access to endless sandy beach ensures
          a relaxed state of mind. It seems like time stands still watching the ocean.
        </p>
        <a href="/facilities" className={styles.btn}>EXPLORE</a>
      </div>
    </section>

    {/* Testimonials */}
    <section className="container" style={{ margin: "80px auto 0" }}>
      <div className={styles.typoTitle} style={{ marginBottom: 20, color: "var(--color-14274a)" }}>Testimonials</div>
      <div className={styles.typoDesc} style={{ fontStyle: "italic", marginBottom: 8 }}>
        "Calm, Serene, Retro – What a way to relax and enjoy"
      </div>
      <div className={styles.typoDesc} style={{ color: "var(--color-14274a)", minWidth: 100, fontSize: 25 }}>
        Mr. and Mrs. Baxter, UK
      </div>
      <div style={{ display: "flex", marginTop: 36, gap: 20 }}>
        <span style={{
          background: "var(--color-e0b973)", width: 56, height: 8, borderRadius: 6, display: "block"
        }} />
        <span style={{
          background: "var(--color-c4c4c4)", width: 9, height: 9, borderRadius: "50%", display: "block"
        }} />
        <span style={{
          background: "var(--color-c4c4c4)", width: 9, height: 9, borderRadius: "50%", display: "block"
        }} />
      </div>
    </section>
  </main>
);

export default Home;
