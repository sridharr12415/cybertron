import { useState, useEffect } from "react";

const CyberCountdown = ({ targetDate, title = "COUNTDOWN" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => String(num).padStart(2, "0");

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="border border-cyan-400/60 bg-cyan-400/10 
        px-3 py-2 sm:px-5 sm:py-4 
        rounded-xl cyan-box-glow 
        hover:bg-cyan-400/20 transition-all duration-300">

        <span className="cyber-digit 
          text-4xl sm:text-6xl md:text-7xl 
          text-cyan-400 cyan-glow">
          {formatNumber(value)}
        </span>
      </div>

      <span className="font-mono text-xs sm:text-sm tracking-widest text-cyan-400/70 uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-10 px-3 sm:px-0">

      {/* Title */}
      <h1 className="text-center font-cyber 
        text-lg sm:text-2xl 
        tracking-[0.2em] sm:tracking-[0.3em] 
        text-cyan-400 cyan-glow">
        {title}
      </h1>

      {/* Mobile Glass Card */}
<div
  className="
    mx-auto
    p-5
    /* MOBILE */
    w-full max-w-sm
    p-4

    /* DESKTOP */
    sm:w-full
    sm:max-w-4xl
    sm:p-3
 
    rounded-2xl
    bg-cyan-400/5
    backdrop-blur-md
    border border-cyan-400/20
  "
>



        {/* Countdown */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          <TimeBlock value={timeLeft.days} label="Days" />

          <span className="hidden sm:inline cyber-digit 
            text-5xl md:text-6xl 
            text-cyan-400 cyan-glow animate-pulse-glow">
            :
          </span>

          <TimeBlock value={timeLeft.hours} label="Hours" />

          <span className="hidden sm:inline cyber-digit 
            text-5xl md:text-6xl 
            text-cyan-400 cyan-glow animate-pulse-glow">
            :
          </span>

          <TimeBlock value={timeLeft.minutes} label="Min" />

          <span className="hidden sm:inline cyber-digit 
            text-5xl md:text-6xl 
            text-cyan-400 cyan-glow animate-pulse-glow">
            :
          </span>

          <TimeBlock value={timeLeft.seconds} label="Sec" />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-32 sm:w-48 
        bg-gradient-to-r 
        from-transparent via-cyan-400/60 to-transparent" />
    </div>
  );
};

export default CyberCountdown;
