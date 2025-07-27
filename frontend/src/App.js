import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import styles from "./style.module.css";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Rooms from "./pages/Rooms";
import ContactUs from "./pages/ContactUs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
