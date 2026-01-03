import MatrixRain from "./components/MatrixRain";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05090c] text-white overflow-hidden">

      {/* 🌌 GLOBAL MATRIX BACKGROUND */}
      <MatrixRain />

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
