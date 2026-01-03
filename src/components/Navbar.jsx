import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "SESSIONS", href: "#sessions" },
   
    { name: "RULES", href: "#rules" },
   
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-cyan-400/20">
      <div className="flex items-center justify-between px-6 md:px-10 h-16">

        {/* LOGO */}
    

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative cursor-pointer hover:text-cyan-400 transition"
            >
              <a href={link.href}>{link.name}</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* REGISTER BUTTON (DESKTOP) */}
        <button
          onClick={() => {
            setActive(true);
            setTimeout(() => setActive(false), 1000);
          }}
          className={`
            hidden md:block relative overflow-hidden
            px-5 py-2 text-sm tracking-widest
            border border-cyan-400 text-cyan-400
            transition-all duration-300 hover:text-black
            ${active
              ? "shadow-[0_0_50px_rgba(0,255,255,0.9)]"
              : "shadow-[0_0_25px_rgba(0,255,255,0.5)]"}
          `}
        >
          {/* Hover fill */}
          <span className="absolute inset-0 bg-cyan-400/50 opacity-0 hover:opacity-100 transition" />

          {/* Click sweep */}
          {active && (
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-sweep" />
          )}

          <span className="relative z-10">REGISTER</span>
        </button>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-400"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-cyan-400/20">
          <div className="flex flex-col px-6 py-4 space-y-3 text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="tracking-widest hover:text-cyan-400 transition"
              >
                {">"} {link.name}
              </a>
            ))}

            
          </div>
        </div>
      )}

      {/* GLOW DIVIDER */}
      <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-cyan-400/60 shadow-[0_0_20px_rgba(0,255,255,0.6)]" />
      <div className="absolute left-0 right-0 bottom-[-14px] h-[24px] bg-gradient-to-b from-cyan-400/50 to-transparent blur-lg" />
    </nav>
  );
}
