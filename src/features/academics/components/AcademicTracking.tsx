import React from 'react';
import { GraduationCap, Star, Brain, Heart, Palette, Medal, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AcademicTracking({ child = { name: 'Mateo López', group: '3° Secundaria', age: 14 } }: { child?: any }) {
  // En un entorno real, los datos vendrían basados en el child.id
  // Por ahora usamos los datos fijos del demo para Mateo López

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Perfil del Estudiante (Cabecera del submódulo) */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-5 -mr-20 -mt-20"></div>
        
        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-3xl font-bold text-indigo-700 border-4 border-white shadow-md z-10">
          {child.name.charAt(0)}
        </div>
        <div className="z-10">
          <h2 className="text-2xl font-black text-slate-900">{child.name}</h2>
          <p className="text-slate-500 font-medium mt-1">{child.group} • {child.age} años • Ingreso: Ago 2024</p>
        </div>
        <div className="ml-auto z-10 flex gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 font-bold text-xs rounded-full border border-green-200">
                Al Corriente
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 font-bold text-xs rounded-full border border-indigo-200">
                Becado 15%
            </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Calificaciones Tradicionales (Columna 1) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex-1">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-indigo-600" size={20} />
              <h3 className="font-bold text-slate-900 text-lg">Calificaciones</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-700">Inglés Básico</span>
                <span className="font-black text-emerald-600 text-lg">9.5</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-700">Computación</span>
                <span className="font-black text-emerald-600 text-lg">10</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-700">Taekwondo</span>
                <span className="font-black text-indigo-600 text-lg">Exc</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-700">Arte y Manualidades</span>
                <span className="font-black text-emerald-600 text-lg">9.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa de Talentos (Oceano Azul) (Columna 2) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-indigo-900 rounded-2xl p-6 shadow-md shadow-indigo-900/20 text-white flex-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
            
            <div className="flex items-center gap-2 mb-6 relative z-10">
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <h3 className="font-bold text-lg">Mapa de Talentos</h3>
            </div>
            
            <p className="text-indigo-200 text-sm mb-6 relative z-10 leading-relaxed">
              Basado en sus actividades e hitos, {child.name.split(' ')[0]} tiene una inclinación natural hacia el <strong className="text-white">pensamiento lógico</strong> y las <strong className="text-white">actividades físicas</strong>.
            </p>

            <div className="space-y-5 relative z-10">
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span className="flex items-center gap-1.5"><Brain size={14} className="text-cyan-400"/> Lógica / Matemáticas</span>
                  <span className="text-cyan-400">90%</span>
                </div>
                <div className="w-full bg-indigo-950 rounded-full h-2.5">
                  <div className="bg-cyan-400 h-2.5 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span className="flex items-center gap-1.5"><Medal size={14} className="text-emerald-400"/> Motricidad Fina/Gruesa</span>
                  <span className="text-emerald-400">85%</span>
                </div>
                <div className="w-full bg-indigo-950 rounded-full h-2.5">
                  <div className="bg-emerald-400 h-2.5 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span className="flex items-center gap-1.5"><Heart size={14} className="text-pink-400"/> Inteligencia Social</span>
                  <span className="text-pink-400">60%</span>
                </div>
                <div className="w-full bg-indigo-950 rounded-full h-2.5">
                  <div className="bg-pink-400 h-2.5 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span className="flex items-center gap-1.5"><Palette size={14} className="text-yellow-400"/> Creatividad / Artes</span>
                  <span className="text-yellow-400">70%</span>
                </div>
                <div className="w-full bg-indigo-950 rounded-full h-2.5">
                  <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diario Emocional (Oceano Azul) (Columna 3) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Heart className="text-pink-500 fill-pink-100" size={20} />
                <h3 className="font-bold text-slate-900 text-lg">Diario de Hitos</h3>
              </div>
              <button className="text-indigo-600 text-sm font-bold hover:underline cursor-pointer">Ver todo</button>
            </div>
            
            <div className="relative border-l-2 border-slate-100 ml-3 space-y-6">
              
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center">
                  <CheckCircle2 size={10} className="text-green-600" />
                </div>
                <p className="text-xs text-slate-400 mb-1">Hoy, 10:30 AM (Compartido con Padres)</p>
                <p className="text-sm text-slate-800 font-medium">{child.name.split(' ')[0]} compartió sus colores con un compañero por primera vez sin que se lo pidieran. ¡Gran avance social!</p>
              </div>

              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-100 border-2 border-indigo-500"></div>
                <p className="text-xs text-slate-400 mb-1">Ayer, 14:15 PM</p>
                <p className="text-sm text-slate-800 font-medium">Logró armar el rompecabezas de 20 piezas completamente solo.</p>
              </div>

              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-100 border-2 border-orange-500 flex items-center justify-center">
                  <AlertCircle size={10} className="text-orange-600" />
                </div>
                <p className="text-xs text-slate-400 mb-1">Hace 3 días</p>
                <p className="text-sm text-slate-800 font-medium">Estuvo un poco frustrado durante la clase de inglés, necesita refuerzo positivo en nuevas palabras.</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
