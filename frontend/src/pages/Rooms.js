import React from "react";
import styles from "../style.module.css";

// PUBLIC_INTERFACE
const Rooms = () => (
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
      }}></div>
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
        <a href="#room-list" className={styles.btn} style={{ margin: "40px 0 0 0" }}>BOOK NOW</a>
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

    <section className="container" style={{ margin: "60px auto 24px" }}>
      <div className={styles.typoTitle} style={{ marginBottom: 22, color: "var(--color-14274a)", textAlign: "center" }}>ROOMS AND RATES</div>
      <p className={styles.typoDesc} style={{ textAlign: "center", maxWidth: 860, margin: "0 auto" }}>
        Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces.
      </p>
    </section>

    <section className="container" id="room-list" style={{ margin: "100px auto" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
        gap: 48
      }}>
        {/* Single Room */}
        <div style={{
          background: "var(--color-ffffff)", borderRadius: 16, overflow: "hidden",
          boxShadow: "0 12px 32px rgba(20,39,74,0.07)"
        }}>
          <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd" alt="Single Room"
            style={{ width: "100%", aspectRatio: "16/9" }} />
          <div style={{ padding: 32 }}>
            <div className={styles.typoCardHead} style={{ color: "var(--color-14274a)" }}>SINGLE ROOM</div>
            <div style={{ margin: "24px 0 18px" }}>
              <span className={styles.btn} style={{ pointerEvents: "none", background: "var(--color-e0b973)", fontSize: 22 }}>$147 Avg/night</span>
            </div>
            <div>
              <a className={styles.btn} href="#">VIEW ROOM DETAILS</a>
            </div>
          </div>
        </div>
        {/* Double Room */}
        <div style={{
          background: "var(--color-ffffff)", borderRadius: 16, overflow: "hidden",
          boxShadow: "0 12px 32px rgba(20,39,74,0.07)"
        }}>
          <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290" alt="Double Room"
            style={{ width: "100%", aspectRatio: "16/9" }} />
          <div style={{ padding: 32 }}>
            <div className={styles.typoCardHead} style={{ color: "var(--color-14274a)" }}>DOUBLE ROOM</div>
            <div style={{ margin: "24px 0 18px" }}>
              <span className={styles.btn} style={{ pointerEvents: "none", background: "var(--color-e0b973)", fontSize: 22 }}>$155 Avg/night</span>
            </div>
            <div>
              <a className={styles.btn} href="#">VIEW ROOM DETAILS</a>
            </div>
          </div>
        </div>
        {/* Twin Room */}
        <div style={{
          background: "var(--color-ffffff)", borderRadius: 16, overflow: "hidden",
          boxShadow: "0 12px 32px rgba(20,39,74,0.07)"
        }}>
          <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a" alt="Twin Room"
            style={{ width: "100%", aspectRatio: "16/9" }} />
          <div style={{ padding: 32 }}>
            <div className={styles.typoCardHead} style={{ color: "var(--color-14274a)" }}>TWIN ROOM</div>
            <div style={{ margin: "24px 0 18px" }}>
              <span className={styles.btn} style={{ pointerEvents: "none", background: "var(--color-e0b973)", fontSize: 22 }}>$155 Avg/night</span>
            </div>
            <div>
              <a className={styles.btn} href="#">VIEW ROOM DETAILS</a>
            </div>
          </div>
        </div>
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

export default Rooms;
