'use client';

import { useCountries } from "../hooks/useCountries";
import Header from "../../app/components/header";
import Footer from "../../app/components/footer";

export default function PaisesPage() {
  const { countries, loading, error, fetchByName, fetchFilterByRegion } = useCountries();

  return (
    
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header/>
      <div className="max-w-7xl mx-auto">
<div className="bg-white shadow-sm sticky  z-50 flex items-center justify-between p-4 m-5">
          <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Directorio Global</h1>
          <p className="text-slate-500">Datos en tiempo real de naciones del mundo.</p>
          
        </div>

        {/* --- CONTROLES --- */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Escribe el nombre de un país..."
            className="flex-1 p-4 rounded-2xl border-none shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            onChange={(e) => fetchByName(e.target.value)}
          />
          <select
            className="p-4 rounded-2xl border-none shadow-sm ring-1 ring-slate-200 bg-white outline-none cursor-pointer focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => fetchFilterByRegion(e.target.value)}
          >
            <option value="">Filtrar por Continente</option>
            <option value="africa">África</option>
            <option value="americas">Américas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europa</option>
            <option value="oceania">Oceanía</option>
          </select>
        </div>

        {/* --- MANEJO DE ERRORES Y CARGA --- */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-indigo-600">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600 mb-4"></div>
            <p className="font-medium">Sincronizando datos...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-6 rounded-2xl text-center shadow-sm">
            <p className="font-bold text-lg">Hubo un problema</p>
            <p className="mb-4">{error}</p>
            <button onClick={() => globalThis.location.reload()} className="bg-red-600 text-white px-6 py-2 rounded-xl text-sm font-bold">
              Reintentar
            </button>
          </div>
        )}

        {/* --- LISTADO DE TARJETAS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {!loading && countries.length > 0 ? (
            countries.map((country) => {
              // Lógica para extraer monedas (CurrencyInfo)
              const monedas = country.currencies 
                ? Object.values(country.currencies)
                    .map(m => `${m.name} [${m.symbol}]`)
                    .join(', ')
                : 'Sin moneda oficial';

              return (
                <div key={country.name.official} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <img 
                    src={country.flags.svg} 
                    alt={country.flags.alt} 
                    className="w-90 h-34 object-cover  border-4 border-slate-50 shadow-inner mb-4"
                  />
                  
                  <h2 className="text-xl font-bold text-slate-800 mb-1 leading-tight">{country.name.common}</h2>
                  <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full uppercase mb-4">
                    Region:{country.region}
                  </span>

                  <div className="w-full space-y-3 pt-2 border-t border-slate-50 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Capital:</span>
                      <span className="text-slate-700 font-bold">{country.capital?.[0] || 'N/A'}</span>
                    </div>

                    <div className="flex justify-between items-start gap-4">
                      <span className="text-slate-400 font-medium">Moneda:</span>
                      <span className="text-slate-700 font-bold text-right">{monedas}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Ubicación:</span>
                      <span className="bg-slate-800 text-white text-[10px] px-2 py-1 rounded-lg font-mono">
                        {country.latlng[0].toFixed(2)}, {country.latlng[1].toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            !loading && !error && <p className="col-span-full text-center text-slate-400">No hay resultados para tu búsqueda.</p>
          )}
        </div>
        <Footer/>
      </div>
    </div>
  );
}