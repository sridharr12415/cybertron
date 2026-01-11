import { useNavigate } from "react-router-dom";
import MatrixRain from "./MatrixRain";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <MatrixRain />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-black/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-10 text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">404</h1>
          <p className="text-gray-300 mb-6">Page not found — the cyber grid couldn't locate that route.</p>

          <button
            onClick={() => navigate('/', { replace: true })}
            className="border border-cyan-400 px-6 py-3 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            <ArrowLeft className="inline mr-2" />
            GO HOME
          </button>
        </div>
      </div>
    </div>
  );
}
