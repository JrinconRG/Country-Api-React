'use client';

import React from 'react';
import {  FaUsers, FaGlobeAmericas, FaSearch, FaMapMarkerAlt, FaFilter } from 'react-icons/fa';
import Link from 'next/link';

export default function HomePage() {
  
  // Datos 
  const integrantes = [
    { nombre: 'Juana Rincon', rol: 'Desarrolladora' },
    { nombre: 'Felix Prada', rol: 'Desarrollador' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* BARRA DE NAVEGACIÓN */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaGlobeAmericas className="text-blue-600 text-2xl" />
            <span className="text-xl font-bold">Country App</span>
          </div>
          <Link href="/paises">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Explorar Países
        </button>
        </Link>
            
          
        </nav>
      </header>

      {/*  PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-4 py-16">
        
        {/* intro */}
        <section className="text-center space-y-6 mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900">
            Explora el Mundo en <span className="text-blue-600">Tiempo Real</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mini aplicación desarrollada con React y TypeScript que consume la 
            <strong> REST Countries API</strong> para visualizar información global detallada.
          </p>
          
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl max-w-xl mx-auto mt-8">
            <h4 className="font-bold text-blue-900">¿Qué problema resuelve?</h4>
            <p className="text-blue-800 text-sm mt-1">
              Centraliza la búsqueda de datos geográficos, banderas y coordenadas en una sola interfaz rápida y moderna.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <FaGlobeAmericas className="text-blue-600 mb-4" size={30} />
            <h3 className="font-bold">Listado Global</h3>
            <p className="text-sm text-gray-500">Banderas, capitales y monedas de todo el mundo.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <FaSearch className="text-blue-600 mb-4" size={30} />
            <h3 className="font-bold">Búsqueda</h3>
            <p className="text-sm text-gray-500">Filtrado dinámico por nombre de país.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <FaMapMarkerAlt className="text-blue-600 mb-4" size={30} />
            <h3 className="font-bold">Geolocalización</h3>
            <p className="text-sm text-gray-500">Coordenadas de latitud y longitud exactas.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <FaFilter className="text-blue-600 mb-4" size={30} />
            <h3 className="font-bold">Filtros</h3>
            <p className="text-sm text-gray-500">Organización por regiones geográficas.</p>
          </div>
        </div>

        <section className="bg-gray-900 text-white rounded-3xl p-10 mb-20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            Tecnologías Utilizadas
          </h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm border border-gray-700">Next</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm border border-gray-700">TypeScript</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm border border-gray-700">Axios</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm border border-gray-700">Tailwind CSS</span>
          </div>
        </section>

        {/* INTEGRANTES */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <FaUsers className="text-blue-600" /> Integrantes del Grupo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  items-center justify-center">
            {integrantes.map((persona, i) => (
              <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {persona.nombre.charAt(0)}
                </div>
                <h4 className="font-bold">{persona.nombre}</h4>
                <p className="text-sm text-gray-500">{persona.rol}</p>
      
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-gray-200">
        <p className="text-sm text-gray-400">© 2026 Country App - Universidad de Medellín</p>
      </footer>
    </div>
  );
}