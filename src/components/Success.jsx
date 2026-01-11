import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function Success() {
  const navigate = useNavigate();
  const verifiedRef = useRef(false);
  const [regNo, setRegNo] = useState("");

  useEffect(() => {
    if (verifiedRef.current) return;

    const paymentDone = localStorage.getItem("paymentDone");
    const storedRegNo = sessionStorage.getItem("registrationNumber");

    if (paymentDone !== "true" || !storedRegNo) {
      navigate("/", { replace: true });
      return;
    }

    setRegNo(storedRegNo);
    verifiedRef.current = true;
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-black/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-10 text-center">
        
        <CheckCircle className="w-20 h-20 mx-auto text-cyan-400 mb-6" />

        <h1 className="text-3xl font-bold text-cyan-400 mb-4">
          REGISTRATION SUCCESSFUL
        </h1>

        <p className="text-gray-300 mb-4">
          Payment submitted successfully. Verification in progress.
        </p>

        {/* ✅ REGISTRATION NUMBER */}
        <div className="mb-6 p-4 border border-cyan-400/40 rounded-lg bg-black/40">
          <p className="text-sm text-gray-400 mb-1">
            Your Registration Number
          </p>
          <p className="text-xl font-mono text-cyan-400 tracking-widest">
            {regNo}
          </p>
            <p className="text-xs text-yellow-400">
    ⚠️ Please note this registration number for verification and future reference.
  </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("paymentDone");
            sessionStorage.removeItem("registrationNumber");
            navigate("/", { replace: true });
          }}
          className="border border-cyan-400 px-6 py-3 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
        >
          <ArrowLeft className="inline mr-2" />
          GO HOME
        </button>
      </div>
    </div>
  );
}
