import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";

// Brand colors
const PRIMARY = "#264653";
const SECONDARY = "#2a9d8f";
const ACCENT = "#e9c46a";

// PUBLIC_INTERFACE
function App() {
  const [theme] = useState('light');

  // Set HTML theme attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className="App" style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/rules" element={<RulesPolicies />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// --- Header & Footer ---
function Header() {
  return (
    <header className="header">
      <div className="nav-content">
        <Link className="brand-logo" to="/">
          <span className="brand-accent">ASTRI</span> STAYS
        </Link>
        <nav className="navbar">
          <NavLink to="/" end className={({isActive})=>isActive?"nav-link active":"nav-link"}>Home</NavLink>
          <NavLink to="/accommodation" className="nav-link">Accommodation</NavLink>
          <NavLink to="/reservation" className="nav-link">Reservation</NavLink>
          <NavLink to="/rules" className="nav-link">Rules</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} ASTRI STAYS. Modern, minimal hospitality.
      </div>
      <div className="footer-links">
        <a href="mailto:info@astristays.com">info@astristays.com</a> &nbsp;|&nbsp; +91-12345-67890
      </div>
    </footer>
  );
}

// --- Page Components ---

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <h1>Welcome to <span className="brand-accent">ASTRI STAYS</span></h1>
        <p>Experience hospitality, comfort, and style at our 3-Star hotel where tranquility meets convenience.</p>
        <div className="hero-highlights">
          <Highlight icon="🛌" text="Modern Rooms" />
          <Highlight icon="📍" text="Prime Location" />
          <Highlight icon="🥗" text="Breakfast Included" />
        </div>
        <Link to="/reservation" className="primary-button hero-btn">Book Now</Link>
      </div>
    </section>
  );
}

function Highlight({ icon, text }) {
  return (
    <div className="highlight">
      <span className="highlight-icon">{icon}</span>
      <span className="highlight-text">{text}</span>
    </div>
  );
}

function Accommodation() {
  // Demo accommodations -- replace images with real ones if available
  const rooms = [
    {
      type: "Deluxe Suite",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      desc: "Spacious room with ensuite bath, sitting area, and scenic views. King bed, WiFi, AC."
    },
    {
      type: "Premium Room",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
      desc: "Perfect for comfort with queen bed, workspace, rainfall shower, and smart TV."
    },
    {
      type: "Twin Room",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      desc: "Ideal for companions—two single beds, modern amenities, and quiet ambience."
    }
  ];
  return (
    <section className="section accommodation-section">
      <h2>Our Accommodation</h2>
      <div className="room-cards">
        {rooms.map((r, idx) => (
          <div className="room-card" key={idx}>
            <img src={r.img} alt={r.type} className="room-img" />
            <div className="room-details">
              <h3>{r.type}</h3>
              <p>{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reservation() {
  // Fake reservation form (no backend)
  const [form, setForm] = useState({
    name: "",
    email: "",
    roomType: "Deluxe Suite",
    checkin: "",
    checkout: "",
    guests: 1,
    requests: ""
  });
  const [status, setStatus] = useState(null);

  // PUBLIC_INTERFACE
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder for form submission -- simulate success
    setStatus("Thank you for your reservation request! Our team will contact you to confirm.");
    setForm({
      name: "",
      email: "",
      roomType: "Deluxe Suite",
      checkin: "",
      checkout: "",
      guests: 1,
      requests: ""
    });
  }

  return (
    <section className="section reservation-section">
      <h2>Make a Reservation</h2>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Name
            <input required name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Email
            <input required type="email" name="email" value={form.email} onChange={handleChange} />
          </label>
        </div>
        <div className="form-row">
          <label>
            Room Type
            <select name="roomType" value={form.roomType} onChange={handleChange}>
              <option>Deluxe Suite</option>
              <option>Premium Room</option>
              <option>Twin Room</option>
            </select>
          </label>
          <label>
            Guests
            <input required type="number" min="1" max="10" name="guests" value={form.guests} onChange={handleChange} />
          </label>
        </div>
        <div className="form-row">
          <label>
            Check-In
            <input required type="date" name="checkin" value={form.checkin} onChange={handleChange} />
          </label>
          <label>
            Check-Out
            <input required type="date" name="checkout" value={form.checkout} onChange={handleChange} />
          </label>
        </div>
        <div className="form-row">
          <label>
            Special Requests
            <textarea name="requests" value={form.requests} onChange={handleChange} placeholder="Any notes or requests" />
          </label>
        </div>
        <button className="primary-button" type="submit">Submit</button>
        {status && <div className="form-status">{status}</div>}
      </form>
    </section>
  );
}

function RulesPolicies() {
  const rules = [
    { title: "Check-in", desc: "14:00 onwards" },
    { title: "Check-out", desc: "By 11:00 AM" },
    { title: "Smoking", desc: "Strictly non-smoking rooms" },
    { title: "Pets", desc: "No pets allowed" },
    { title: "ID Proof", desc: "Government-issued ID required at check-in" },
    { title: "Quiet Hours", desc: "10 PM to 6 AM" }
  ];
  return (
    <section className="section rules-section">
      <h2>Rules & Policies</h2>
      <ul className="rules-list">
        {rules.map((rule, idx) => (
          <li key={idx}><strong>{rule.title}:</strong> {rule.desc}</li>
        ))}
      </ul>
      <div className="policy-note">
        For more details or questions, please <Link to="/contact">contact us</Link>.
      </div>
    </section>
  );
}

function ContactUs() {
  // Contact/inquiry form
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);

  // PUBLIC_INTERFACE
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value }));
  }
  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name:"", email:"", message:"" });
  }

  return (
    <section className="section contact-section">
      <h2>Contact Us</h2>
      <div className="contact-info-container">
        <div className="contact-details">
          <div><strong>Address:</strong><br />123 Main Road, City, Country</div>
          <div><strong>Email:</strong><br /><a href="mailto:info@astristays.com">info@astristays.com</a></div>
          <div><strong>Phone:</strong><br />+91-12345-67890</div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input required name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Email
            <input required type="email" name="email" value={form.email} onChange={handleChange} />
          </label>
          <label>
            Message
            <textarea required name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" />
          </label>
          <button className="primary-button" type="submit">Send</button>
          {sent && <div className="form-status">Thank you for your inquiry!</div>}
        </form>
      </div>
    </section>
  );
}

function Gallery() {
  // Gallery images -- replace URLs with real hotel image URLs as needed
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80"
  ];
  return (
    <section className="section gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div className="gallery-img-wrapper" key={i}>
            <img src={src} alt={`ASTRI Stays Hotel photo ${i+1}`} className="gallery-img" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="section notfound-section">
      <h2>Page Not Found</h2>
      <p>The page you tried to access does not exist.</p>
      <Link to="/" className="primary-button">Go Home</Link>
    </section>
  );
}

export default App;
