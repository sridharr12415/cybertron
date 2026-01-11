const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-cyan-400/30">

<div className="
  max-w-6xl mx-auto
  px-4 sm:px-6
  py-8 sm:py-10

  flex flex-col md:flex-row
  items-center justify-center
  gap-4 md:gap-6

  text-center md:text-left
">
  {/* Hacker Branding */}
  <div className="relative group">
    {/* Glitch glow */}
    <div className="absolute -inset-2 opacity-30 blur-xl bg-cyan-500/20 group-hover:opacity-60 transition" />

    <span
      className="
        relative z-10
        font-mono font-bold
        text-sm sm:text-base md:text-lg
        text-cyan-400

        tracking-[0.25em]
        uppercase
        leading-relaxed

        drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]
      "
    >
      &gt; NEW PRINCE SHRI BHAVANI COLLEGE OF ENGINEERING & TECHNOLOGY
    </span>
  </div>
</div>



    </footer>
  );
};

export default Footer;
