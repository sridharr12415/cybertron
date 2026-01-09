import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MatrixRain from "./MatrixRain";
import { MailCheck, ArrowRight } from "lucide-react";

export default function RegistrationCompleted() {
  const navigate = useNavigate();
  const [regId, setRegId] = useState(null);

  useEffect(() => {
    const id = sessionStorage.getItem("registrationNumber");
    if (id) setRegId(id);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <MatrixRain />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-black/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-10 text-center">
          <MailCheck className="w-16 h-16 mx-auto text-cyan-400 mb-4" />
          <h1 className="text-2xl font-bold text-cyan-400 mb-2">Registration Complete</h1>
          <p className="text-gray-300 mb-4">Thank you — we've sent a confirmation to your email. Please check your inbox and spam folder.</p>

          {regId && (
            <p className="font-mono text-cyan-400 mb-4">REG NO: {regId}</p>
          )}

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate('/', { replace: true })}
              className="border border-cyan-400 px-5 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              HOME
            </button>

            <button
              onClick={() => navigate('/register')}
              className="border border-cyan-400 px-5 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black transition flex items-center gap-2"
            >
              <ArrowRight className="inline" />
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
