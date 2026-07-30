import React from 'react';
import { Plus, Edit2, Trash2, Building, Briefcase } from 'lucide-react';

const mockDepartamentos = [
  { id: '1', name: 'Académico' },
  { id: '2', name: 'Administración' },
  { id: '3', name: 'Servicios Generales' },
  { id: '4', name: 'Dirección General' },
];

const mockPuestos = [
  { id: '1', name: 'Director(a)', dept: 'Dirección General' },
  { id: '2', name: 'Maestra Titular', dept: 'Académico' },
  { id: '3', name: 'Asistente Educativa', dept: 'Académico' },
  { id: '4', name: 'Recepcionista', dept: 'Administración' },
  { id: '5', name: 'Personal de Limpieza', dept: 'Servicios Generales' },
];

const CatalogCard = ({ title, icon: Icon, children, count }: any) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-96">
    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
      <div className="flex items-center gap-2">
        <Icon size={18} className="text-indigo-600" />
        <h3 className="font-bold text-slate-800">{title}</h3>
        <span className="bg-slate-200 text-slate-600 text-xs px-2 py-0.5 rounded-full font-medium ml-2">{count}</span>
      </div>
      <button className="text-indigo-600 hover:bg-indigo-50 p-1.5 rounded-lg transition-colors cursor-pointer">
        <Plus size={18} />
      </button>
    </div>
    <div className="flex-1 overflow-y-auto p-2">
      {children}
    </div>
  </div>
);

const ListItem = ({ title, subtitle }: any) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors group border border-transparent hover:border-slate-100 mb-1">
    <div>
      <p className="font-semibold text-sm text-slate-700">{title}</p>
      {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
    </div>
    <div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
      <button className="text-slate-400 hover:text-indigo-600 cursor-pointer"><Edit2 size={14} /></button>
      <button className="text-slate-400 hover:text-red-600 cursor-pointer"><Trash2 size={14} /></button>
    </div>
  </div>
);

export default function StaffCatalogs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Departamentos */}
      <CatalogCard title="Departamentos" icon={Building} count={mockDepartamentos.length}>
        {mockDepartamentos.map(d => (
          <ListItem key={d.id} title={d.name} />
        ))}
      </CatalogCard>

      {/* Puestos */}
      <CatalogCard title="Puestos de Trabajo" icon={Briefcase} count={mockPuestos.length}>
        {mockPuestos.map(p => (
          <ListItem 
            key={p.id} 
            title={p.name} 
            subtitle={`Depto: ${p.dept}`}
          />
        ))}
      </CatalogCard>

    </div>
  );
}
