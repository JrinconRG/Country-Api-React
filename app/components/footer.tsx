import { FaGlobeAmericas } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 relative">
      
      {/* 🌈 Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-indigo-100 to-slate-100 blur-2xl opacity-40"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* 🌍 LOGO + DESCRIPCIÓN */}
          <div className="text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold text-slate-800">
              <FaGlobeAmericas className="text-blue-600 text-2xl" />
              Country App
            </div>
            <p className="text-sm text-slate-500 max-w-sm">
              Plataforma web para explorar información de países en tiempo real 
              con una interfaz moderna y visualmente atractiva.
            </p>
          </div>

          {/* 📊 INFO DEL PROYECTO */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-slate-500">Proyecto académico</p>
            <p className="text-sm font-semibold text-slate-700">
              Universidad de Medellín
            </p>
            <p className="text-xs text-slate-400">
              2026 • Ingeniería de Software
            </p>
          </div>

        </div>

        {/* 🔻 Línea decorativa */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

        {/* © COPYRIGHT */}
        <div className="text-center text-xs text-slate-400 tracking-wide">
          © 2026 Country App — Diseño moderno con Tailwind CSS
        </div>

      </div>
    </footer>
  );
}