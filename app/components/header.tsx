import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          
          
          
          <h1 className="text-xl font-black text-slate-800 uppercase tracking-tighter">
            COUNTRY<span className="text-blue-700-600">APP</span>
          </h1>
        </div>

        <nav className="flex gap-4">
          <Link href="/">
            <button className="text-slate-600 hover:text-blue-600 font-medium transition px-3 py-2 rounded-lg hover:bg-indigo-50">
              Inicio
            </button>
          </Link>
          <Link href="/paises">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Explorar Países
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}