import React, { useState } from 'react';
import { ChevronRight, Search, Edit2, Trash2, GraduationCap, ArrowLeft } from 'lucide-react';
import AcademicTracking from '../../academics/components/AcademicTracking';

const mockChildren = [
  { id: '1', name: 'Mateo López', age: 4, dob: '2022-05-14', tutor: 'María García', phone: '555-0101', status: 'Activo', group: 'Kínder 1 B (Ranitas)' },
  { id: '2', name: 'Sofía Martínez', age: 3, dob: '2023-01-20', tutor: 'Carlos Martínez', phone: '555-0202', status: 'Activo', group: 'Maternal A (Abejitas)' },
  { id: '3', name: 'Leo Gómez', age: 5, dob: '2021-11-03', tutor: 'Ana Ruiz', phone: '555-0303', status: 'Inactivo', group: 'Kínder 2 A' },
  { id: '4', name: 'Valentina Silva', age: 2, dob: '2024-02-15', tutor: 'Jorge Silva', phone: '555-0404', status: 'Activo', group: 'Maternal A (Abejitas)' },
];

export default function ChildrenDirectory() {
  // Start the demo in the directory view
  const [selectedChildId, setSelectedChildId] = useState<string | null>(null);

  const selectedChild = mockChildren.find(c => c.id === selectedChildId);

  if (selectedChild) {
    return (
      <div className="animate-in fade-in duration-300">
        <button 
          onClick={() => setSelectedChildId(null)}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-semibold text-sm mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} />
          Volver al Directorio de Niños
        </button>
        <AcademicTracking child={selectedChild} />
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-300">
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span>Principal</span>
            <ChevronRight size={14} />
            <span className="text-indigo-600 font-medium">Directorio</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Directorio de Niños</h1>
          <p className="text-slate-500 mt-2 text-sm">Gestiona la información, tutores y salones asignados.</p>
        </div>
        
        <div className="flex gap-3">
          <button className="bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded-xl text-sm font-semibold shadow-sm hover:bg-slate-50 transition-colors cursor-pointer">
            Exportar CSV
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <div className="relative w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Buscar por nombre..." className="w-full pl-9 pr-4 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
          </div>
          <div className="text-sm text-slate-500">
            Mostrando <span className="font-bold text-slate-700">4</span> registros
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold">Nombre del Niño</th>
                <th className="px-6 py-4 font-semibold">Salón / Grupo</th>
                <th className="px-6 py-4 font-semibold">Tutor Principal</th>
                <th className="px-6 py-4 font-semibold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockChildren.map((child) => (
                <tr key={child.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                        {child.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{child.name}</div>
                        <div className="text-xs text-slate-400">Nac: {child.dob} ({child.age} años)</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-indigo-700 bg-indigo-50 px-2 py-1 rounded-md text-xs border border-indigo-100">
                      {child.group}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-600 font-medium">{child.tutor}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{child.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                    <button 
                      onClick={() => setSelectedChildId(child.id)}
                      className="text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer inline-flex items-center gap-1 border border-indigo-100">
                      <GraduationCap size={14} />
                      Ver Desempeño
                    </button>
                    <button className="text-slate-400 hover:text-indigo-600 p-1.5 transition-colors cursor-pointer inline-block" title="Modificar">
                      <Edit2 size={16} />
                    </button>
                    <button className="text-slate-400 hover:text-red-600 p-1.5 transition-colors cursor-pointer inline-block" title="Dar de baja">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
