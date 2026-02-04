import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { API_BASE } from "./api";

import MatrixRain from "./components/MatrixRain";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Register from "./components/Register";
import Success from "./components/Success";
import Verify from "./components/Verify";
import NotFound from "./components/NotFound";
import RegistrationCompleted from "./components/RegistrationCompleted";

export default function App() {
  // ✅ API CONNECTION CHECK
  useEffect(() => {
    console.log("🔗[API] Checking connection:", API_BASE + "/");
    fetch(API_BASE + "/")
      .then((res) => res.json())
      .then((data) => console.log("API CONNECTED ✅", data))
      .catch((err) => console.error("API NOT CONNECTED ❌", err));
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#05090c] text-white overflow-hidden">
        {/* 🌌 BACKGROUND */}
        <MatrixRain />

        {/* FOREGROUND */}
        <div className="relative z-10 pt-16">
          <Navbar />

          <Routes>
            <Route path="/cybertron" element={<Hero />} />
            <Route path="/register" element={<Register />} />
            <Route path="/success" element={<Success />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/registered" element={<RegistrationCompleted />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

