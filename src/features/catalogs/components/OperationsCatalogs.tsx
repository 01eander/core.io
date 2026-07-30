import React from 'react';
import { Plus, Edit2, Trash2, HeartPulse, PackageSearch, AlertTriangle } from 'lucide-react';

const mockAlergias = [
  { id: '1', name: 'Intolerancia a la lactosa', severity: 'Media' },
  { id: '2', name: 'Alergia al maní/cacahuate', severity: 'Alta' },
  { id: '3', name: 'Asma', severity: 'Media' },
  { id: '4', name: 'Alergia a picaduras de abeja', severity: 'Alta' },
];

const mockInventario = [
  { id: '1', name: 'Abarrotes / Cafetería' },
  { id: '2', name: 'Papelería y Materiales' },
  { id: '3', name: 'Uniformes y Ropa' },
  { id: '4', name: 'Limpieza e Higiene' },
];

const mockIncidencias = [
  { id: '1', name: 'Salida Anticipada (Enfermedad)' },
  { id: '2', name: 'Retardo en Recogida (Tutor)' },
  { id: '3', name: 'Permiso Especial' },
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

const ListItem = ({ title, badge }: any) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors group border border-transparent hover:border-slate-100 mb-1">
    <p className="font-semibold text-sm text-slate-700">{title}</p>
    <div className="flex items-center gap-3">
      {badge && (
        <span className={`px-2 py-0.5 text-[10px] uppercase font-bold rounded-md ${badge.className}`}>
          {badge.text}
        </span>
      )}
      <div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
        <button className="text-slate-400 hover:text-indigo-600 cursor-pointer"><Edit2 size={14} /></button>
        <button className="text-slate-400 hover:text-red-600 cursor-pointer"><Trash2 size={14} /></button>
      </div>
    </div>
  </div>
);

export default function OperationsCatalogs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {/* Catálogo Médico */}
      <CatalogCard title="Catálogo Médico" icon={HeartPulse} count={mockAlergias.length}>
        {mockAlergias.map(a => (
          <ListItem 
            key={a.id} 
            title={a.name} 
            badge={{ 
              text: a.severity, 
              className: a.severity === 'Alta' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-orange-50 text-orange-700 border border-orange-100'
            }}
          />
        ))}
      </CatalogCard>

      {/* Categorías de Inventario */}
      <CatalogCard title="Categorías de Inventario" icon={PackageSearch} count={mockInventario.length}>
        {mockInventario.map(i => (
          <ListItem key={i.id} title={i.name} />
        ))}
      </CatalogCard>

      {/* Motivos de Incidencia */}
      <CatalogCard title="Motivos de Incidencia" icon={AlertTriangle} count={mockIncidencias.length}>
        {mockIncidencias.map(m => (
          <ListItem key={m.id} title={m.name} />
        ))}
      </CatalogCard>

    </div>
  );
}
