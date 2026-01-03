import { useState } from "react";
import BootSequence from "./BootSequence";
import GlitchTitle from "./GlitchTitle";
import EventHighlights from "./EventHighlights";
import SessionsSection from "./SessionsSection";
import RulesSection from "./RulesSection";
import ContactSection from "./ContactSection";
import PerksSection from "./PerksSection";
import Footer from "./Footer";

export default function Hero() {
  const [bootDone, setBootDone] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <section className="relative">

      {/* ===== BOOT SEQUENCE (ONLY THIS EXISTS INITIALLY) ===== */}
      {!bootDone && (
        <div className="flex flex-col items-center justify-center pt-32 pb-20">
          <BootSequence onComplete={() => setBootDone(true)} />
        </div>
      )}

      {/* ===== HERO CONTENT (RENDERS AFTER BOOT, NO RESERVED SPACE) ===== */}
      {bootDone && (
        <>
          <div className="flex flex-col items-center text-center pt-32 pb-20">

            <GlitchTitle text="CYBERTRON CTF 2025" />

            <p className="mt-6 text-gray-400 tracking-[0.3em] text-sm md:text-lg">
              UNLEASH THE MACHINE WITHIN
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">

              {/* INITIALIZE */}
              <button
                onClick={() => setActive("init")}
                className={`
                  relative overflow-hidden
                  px-10 py-4 border border-cyan-400
                  text-cyan-400 tracking-widest
                  hover:text-black group
                  transition-all duration-300
                  ${active === "init"
                    ? "shadow-[0_0_60px_rgba(0,255,255,0.9)]"
                    : "shadow-[0_0_30px_rgba(0,255,255,0.5)]"}
                `}
              >
                <span className="absolute inset-0 bg-cyan-400/50 opacity-0 group-hover:opacity-100 transition" />
                {active === "init" && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-sweep" />
                )}
                <span className="relative z-10">INITIALIZE REGISTRATION</span>
              </button>

              {/* MISSIONS */}
              <button
                onClick={() => setActive("missions")}
                className={`
                  relative overflow-hidden
                  px-10 py-4 border border-purple-500
                  text-purple-400 tracking-widest
                  hover:text-black group
                  transition-all duration-300
                  ${active === "missions"
                    ? "shadow-[0_0_60px_rgba(168,85,247,0.9)]"
                    : "shadow-[0_0_30px_rgba(168,85,247,0.5)]"}
                `}
              >
                <span className="absolute inset-0 bg-purple-500/50 opacity-0 group-hover:opacity-100 transition" />
                {active === "missions" && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent animate-sweep" />
                )}
                <span className="relative z-10">VIEW MISSIONS</span>
              </button>
            </div>
          </div>

          {/* ===== EVENT HIGHLIGHTS (IMMEDIATELY AFTER, NO GAP) ===== */}
          <EventHighlights />
          <SessionsSection />
          
          <RulesSection />
          <PerksSection/>
          
          <ContactSection/>
          <Footer />
         
          
        </>
      )}
    </section>
  );
}
