import React from 'react';
import { Plus, Edit2, Trash2, Calendar, BookOpen, Layers, Users, Shield } from 'lucide-react';

const mockCiclos = [
  { id: '1', name: 'Ciclo Escolar 2024-2025', active: true },
  { id: '2', name: 'Curso de Verano 2024', active: false },
  { id: '3', name: 'Ciclo Escolar 2023-2024', active: false },
];

const mockNiveles = [
  { id: '1', name: 'Maternal', ageRange: '1 a 2 años' },
  { id: '2', name: 'Kínder 1', ageRange: '3 años' },
  { id: '3', name: 'Kínder 2', ageRange: '4 años' },
  { id: '4', name: 'Primaria Baja', ageRange: '6 a 8 años' },
];

const mockGrupos = [
  { id: '1', name: 'Maternal A (Abejitas)', level: 'Maternal', capacity: 15 },
  { id: '2', name: 'Kínder 1 B (Ranitas)', level: 'Kínder 1', capacity: 20 },
  { id: '3', name: '1ro de Primaria A', level: 'Primaria Baja', capacity: 25 },
];

const mockMaterias = [
  { id: '1', name: 'Inglés Básico', type: 'Curricular' },
  { id: '2', name: 'Computación', type: 'Curricular' },
  { id: '3', name: 'Taekwondo', type: 'Taller Extra' },
  { id: '4', name: 'Estimulación Temprana', type: 'Desarrollo' },
];

const mockCasas = [
  { id: '1', name: 'Dragones', emoji: '🐉', points: 1250 },
  { id: '2', name: 'Grifos', emoji: '🦅', points: 1080 },
  { id: '3', name: 'Krakens', emoji: '🐙', points: 950 },
  { id: '4', name: 'Fénix', emoji: '🔥', points: 820 },
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

const ListItem = ({ title, subtitle, badge }: any) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors group border border-transparent hover:border-slate-100 mb-1">
    <div>
      <p className="font-semibold text-sm text-slate-700">{title}</p>
      {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
    </div>
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

export default function AcademicCatalogs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Ciclos Escolares */}
      <CatalogCard title="Ciclos Escolares" icon={Calendar} count={mockCiclos.length}>
        {mockCiclos.map(c => (
          <ListItem 
            key={c.id} 
            title={c.name} 
            badge={c.active ? { text: 'ACTIVO', className: 'bg-green-100 text-green-700' } : { text: 'CERRADO', className: 'bg-slate-100 text-slate-500' }}
          />
        ))}
      </CatalogCard>

      {/* Niveles Educativos */}
      <CatalogCard title="Niveles Educativos" icon={Layers} count={mockNiveles.length}>
        {mockNiveles.map(n => (
          <ListItem 
            key={n.id} 
            title={n.name} 
            subtitle={`Rango: ${n.ageRange}`}
          />
        ))}
      </CatalogCard>

      {/* Grupos y Salones */}
      <CatalogCard title="Grupos y Salones" icon={Users} count={mockGrupos.length}>
        {mockGrupos.map(g => (
          <ListItem 
            key={g.id} 
            title={g.name} 
            subtitle={g.level}
            badge={{ text: `Cap: ${g.capacity}`, className: 'bg-indigo-50 text-indigo-700 border border-indigo-100' }}
          />
        ))}
      </CatalogCard>

      {/* Materias y Talleres */}
      <CatalogCard title="Materias / Talleres" icon={BookOpen} count={mockMaterias.length}>
        {mockMaterias.map(m => (
          <ListItem 
            key={m.id} 
            title={m.name} 
            badge={{ text: m.type, className: 'bg-orange-50 text-orange-700 border border-orange-100' }}
          />
        ))}
      </CatalogCard>

      {/* Sistema de Casas */}
      <CatalogCard title="Casas (Gamificación)" icon={Shield} count={mockCasas.length}>
        {mockCasas.map(c => (
          <ListItem 
            key={c.id} 
            title={c.name} 
            subtitle={`Símbolo: ${c.emoji}`}
            badge={{ text: `${c.points} pts`, className: 'bg-emerald-50 text-emerald-700 border border-emerald-100' }}
          />
        ))}
      </CatalogCard>

    </div>
  );
}
